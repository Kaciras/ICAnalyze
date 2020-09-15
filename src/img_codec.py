import asyncio
from asyncio.subprocess import create_subprocess_exec, PIPE
from pathlib import Path

from _common import hrsize
from img_metrics import ImageCodecAnalyzer, get_mux, ImageCodecPlot

# 保存编码器输出的临时文件，可以搞成内存文件系统加点速
TEMP_DIR = "R:\\"

# cwebp 下载地址：
# https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html
WEBP_ENCODER = "work/cwebp"


async def cwebp_encode(origin, args):
	args += ("-quiet", origin, "-o", "-")
	proc = await create_subprocess_exec(WEBP_ENCODER, *args, stdout=PIPE)
	buffer, code = await asyncio.gather(proc.stdout.read(), proc.wait())

	code = await proc.wait()
	if code != 0:
		raise Exception("编码器出错！")

	return buffer, get_mux(buffer)


class CWebPAnalyzer:

	def __init__(self, file):
		self.file = file
		self.anal = ImageCodecAnalyzer(file, cwebp_encode)
		self.basis = None

	async def _line_chart(self, alist, title, xtricks):
		rst = await self.anal.compute_all(alist)
		plot = ImageCodecPlot(rst, title)

		if self.basis:
			plot.set_ylims(self.basis)

		return plot.draw_lines(xtricks)

# np.savetxt("rs.csv", results, delimiter=",")

	async def quality(self, range_=range(0, 101)):
		argslist = [("-sharp_yuv", "-q", str(v)) for v in range_]
		xtricks = range(range_.start, range_.stop, 5)
		return await self._line_chart(argslist, "Quality (-q)", xtricks)

	async def method(self):
		rng = range(0, 7)
		qs = [("-sharp_yuv", "-m", str(m)) for m in rng]
		return await self._line_chart(qs, "Method (-m)", rng)

	async def preset(self):
		presets = ("default", "photo", "picture", "drawing", "icon", "text")
		qs = [("-preset", str(p), "-sharp_yuv") for p in presets]
		results = await self.anal.compute_all(qs)

		plot = ImageCodecPlot(results, "Method (-m)")

		if self.basis:
			plot.set_ylims(self.basis)

		return plot.draw_bars(presets)

	def sns(self):
		qs = [("-sharp_yuv", "-sns", str(m)) for m in range(0, 101)]
		results = await self.anal.compute_all(qs)

		plot = ImageCodecPlot(results, "Method (-m)")

		if self.basis:
			plot.set_ylims(self.basis)

		return plot.draw_lines(results)

	def lossless_quality(self):
		qs = [("-lossless", "-q", str(v)) for v in range(0, 101)]
		esults = await self.anal.compute_all(qs)

		yaxes = draw_chart(range(0, 101), results, "SSIM", range(0, 101, 5))

	def lossless_mode(self):
		qs = [("-lossless", "-z", str(m)) for m in range(0, 10)]
		results = await anal.compute_all(qs)
		yaxes = draw_chart(range(0, 10), results, "SSIM", range(0, 10))

	# 空间噪声整形 (-sns)
	def near_lossless(self):
		qs = [("-near_lossless", str(v)) for v in range(0, 101)]
		results = await anal.compute_all(qs)
		yaxes = draw_chart(range(0, 101), results, "SSIM", range(0, 101, 5))

	def filter(self):
		qs = [("-f", str(v)) for v in range(0, 101)]
		results = await anal.compute_all(qs)
		yaxes = draw_chart(range(0, 101), results, "SSIM", range(0, 101, 5))


async def analyze(file):
	analyzer = CWebPAnalyzer(file)
	analyzer.basis = await analyzer.quality()
	await analyzer.method()
	await analyzer.preset()
	# analyzer.filter()
	# analyzer.sns()
	# analyzer.lossless_quality()
	# analyzer.lossless_mode()
	# analyzer.near_lossless()

def collect(files, map_func):
	rsize = wsize = count = 0

	for file in files:
		target = map_func(file)

		if target.is_file():
			rsize += file.stat().st_size
			wsize += target.stat().st_size
			count += 1

	return count, rsize, wsize


def statistic():
	webps = Path(r"G:\blog\cache\webp")
	files = Path(r"G:\blog\image").iterdir()

	def map_webp(oigin):
		return webps.joinpath(oigin.name).with_suffix(".webp")

	count, rsize, wsize = collect(files, map_webp)
	print(f"{count=}, rsize={hrsize(rsize)}, wsize={hrsize(wsize)}, "
		  f"压缩率={wsize / rsize * 100:.2f}%")


# 75,021
# 3,935
# 231,180 = 310136
#
# 16,160
# 33,449 =

if __name__ == '__main__':
	asyncio.get_event_loop().run_until_complete(analyze(
		r"G:\blog\image\6f6a94d94f9eb1a25faaa68ea3f8565ad09a80b4458bcdbb6bea9ed95f5a3df0.png"))
# statistic()
