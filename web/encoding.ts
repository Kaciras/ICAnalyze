import * as Comlink from "comlink";
import WorkerUrl from "worker-plugin/loader?esModule&name=encoding!./worker";
import type { WorkerApi } from "./worker";
import { detectAVIFSupport, detectWebPSupport } from "./utils";
import { ButteraugliOptions } from "../lib/metrics";
import { blobToImg, drawableToImageData } from "squoosh/src/lib/util";

export interface MeasureOptions {
	PSNR: boolean;
	SSIM: boolean;
	butteraugli: false | ButteraugliOptions;
}

interface Metrics {
	SSIM?: number;
	PSNR?: number;
	butteraugli?: {
		source: number;
		heatMap: ImageBitmap;
	};
}

export interface ConvertOutput {
	buffer: ArrayBuffer;
	metrics: Metrics;
	bitmap: ImageBitmap;
}

export class BatchEncoder<T> {

	private readonly url: string;

	private image?: ImageData;
	private optionsList!: T[];
	private measure!: MeasureOptions;

	private index = 0;
	private workers: Worker[] = [];

	private results!: ConvertOutput[];

	constructor(url: string) {
		this.url = url;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onProgress(value: number) {
		// noop by default
	}

	encode(image: ImageData, optionsList: T[], measure: MeasureOptions) {
		this.image = image;
		this.optionsList = optionsList;
		this.measure = measure;
		return this;
	}

	async start(threadCount = 4) {
		if (!this.image) {
			throw new Error("You should call encode() before start.");
		}
		if (threadCount < 1) {
			throw new Error("Thread count must be at least 1");
		}

		const length = this.optionsList.length;
		threadCount = Math.min(threadCount, length);

		this.results = new Array<ConvertOutput>(length);

		const tasks = new Array(threadCount);

		for (let i = 0; i < threadCount; i++) {
			const worker = new Worker(this.url);
			const wrapper = Comlink.wrap<WorkerApi>(worker);
			await wrapper.setImageToEncode(this.image);

			this.workers.push(worker);
			tasks.push(this.poll(wrapper));
		}

		return Promise.all(tasks).then(() => this.results);
	}

	stop() {
		this.workers.forEach(worker => worker.terminate());
	}

	private async poll(wrapper: Comlink.Remote<WorkerApi>) {
		const { results, optionsList, measure } = this;

		while (this.index < optionsList.length) {
			const i = this.index++;
			this.onProgress(i);

			const buffer = await wrapper.webpEncode(optionsList[i]);
			// const data = await wrapper.webpDecode(buffer);
			// const bitmap = await createImageBitmap(data);
			const [data, bitmap] = await decodeWebP(buffer);

			const metrics: Metrics = {};
			if (measure.PSNR) {
				metrics.PSNR = await wrapper.calcPSNR(data);
			}
			if (measure.SSIM) {
				metrics.SSIM = await wrapper.calcSSIM(data);
			}
			if (measure.butteraugli) {
				const [source, raw] = await wrapper.calcButteraugli(data);
				const heatMap = await createImageBitmap({
					width: bitmap.width,
					height: bitmap.height,
					data: new Uint8ClampedArray(raw),
				});
				metrics.butteraugli = { source, heatMap };
			}

			results[i] = { buffer, bitmap, metrics };
		}
	}
}

export function createWorkers() {
	return new BatchEncoder(WorkerUrl);
}

type DecodeResult = [ImageData, ImageBitmap];

export async function decodeImage(blob: Blob) {
	const bitmap = await createImageBitmap(blob);

	const canvas = document.createElement("canvas");
	const { width, height } = bitmap;
	canvas.width = width;
	canvas.height = height;

	const ctx = canvas.getContext("2d")!;
	ctx.drawImage(bitmap, 0, 0);
	const imageData = ctx.getImageData(0, 0, width, height);

	return [imageData, bitmap] as DecodeResult;
}

type featureDetector = () => Promise<boolean>;
type DecodeFunction = (buffer: ArrayBuffer) => Promise<DecodeResult>;

function decodeFn(
	checkFn: featureDetector,
	native: DecodeFunction,
	polyfill: DecodeFunction,
) {
	let bestDecodeFn;

	return async function choose(buffer: ArrayBuffer) {
		if (await checkFn()) {
			bestDecodeFn = native;
		} else {
			bestDecodeFn = polyfill;
		}
		return await bestDecodeFn(buffer);
	};
}

function decodeAVIFNative(buffer: ArrayBuffer) {
	return decodeImage(new Blob([buffer], { type: "image/avif" }));
}

async function decodeAVIFWorker(buffer: ArrayBuffer) {
	const worker = Comlink.wrap<WorkerApi>(new Worker(WorkerUrl));
	const imageData = await worker.avifDecode(buffer);
	const bitmap = await createImageBitmap(imageData);
	return [imageData, bitmap] as DecodeResult;
}

function decodeWebPNative(buffer: ArrayBuffer) {
	return decodeImage(new Blob([buffer], { type: "image/webp" }));
}

async function decodeWebPWorker(buffer: ArrayBuffer) {
	const worker = Comlink.wrap<WorkerApi>(new Worker(WorkerUrl));
	const imageData = await worker.webpDecode(buffer);
	const bitmap = await createImageBitmap(imageData);
	return [imageData, bitmap] as DecodeResult;
}

export const decodeWebP = decodeFn(detectWebPSupport, decodeWebPNative, decodeWebPWorker);
export const decodeAVIF = decodeFn(detectAVIFSupport, decodeAVIFNative, decodeAVIFWorker);

function ensureSVGSize(svgXml: string) {
	const parser = new DOMParser();
	const document = parser.parseFromString(svgXml, "image/svg+xml");
	const svg = document.documentElement;

	if (svg.getAttribute("width") && svg.getAttribute("height")) {
		return svgXml;
	}

	const viewBox = svg.getAttribute("viewBox");
	if (viewBox === null) {
		throw Error("SVG must have width/height or viewBox");
	}
	const [, , width, height] = viewBox.split(/\s+/);
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);

	return new XMLSerializer().serializeToString(document);
}

export function svgToImageData(svgXml: string) {
	svgXml = ensureSVGSize(svgXml);
	const blob = new Blob([svgXml], { type: "image/svg+xml" });
	return blobToImg(blob).then(drawableToImageData);
}
