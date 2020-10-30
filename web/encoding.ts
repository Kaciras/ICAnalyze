import * as Comlink from "comlink";
import { ButteraugliOptions } from "../lib/metrics";
import type { WorkerApi } from "./worker";
import { ImageEncoder } from "./options";
import { decode } from "./decode";

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
		heatMap: ImageData;
	};
}

export interface ConvertOutput {
	time: number;
	buffer: ArrayBuffer;
	data: ImageData;
	metrics: Metrics;
}

export function newWorker() {
	// @ts-ignore ts-loader will convert files to ES module.
	return new Worker(new URL("./worker", import.meta.url));
}

export class BatchEncoder<T> {

	private readonly count: number;
	private readonly encoder: ImageEncoder;

	private image!: ImageData;
	private optionsList!: T[];
	private measureOptions!: MeasureOptions;

	private workers: Worker[] = [];

	private index = 0;
	private results!: ConvertOutput[];

	constructor(workerCount: number, encoder: ImageEncoder) {
		if (workerCount < 1) {
			throw new Error("Thread count must be at least 1");
		}
		this.count = workerCount;
		this.encoder = encoder;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onProgress(value: number) {}

	async encode(image: ImageData, optionsList: T[], measure: MeasureOptions) {
		this.image = image;
		this.optionsList = optionsList;
		this.measureOptions = measure;

		const length = optionsList.length;

		this.results = new Array<ConvertOutput>(length);
		const tasks = new Array(this.workers.length);

		this.workers = [];

		for (let i = 0; i < this.count; i++) {
			const worker = newWorker();
			const remote = Comlink.wrap<WorkerApi>(worker);
			await remote.setImageToEncode(image);

			this.workers.push(worker);
			tasks.push(this.poll(remote));
		}

		return Promise.all(tasks).then(() => this.results);
	}

	stop() {
		this.workers.forEach(worker => worker.terminate());
	}

	private async poll(remote: Comlink.Remote<WorkerApi>) {
		const { results, optionsList, encoder } = this;

		while (this.index < optionsList.length) {
			const i = this.index++;
			this.onProgress(i);

			const { buffer, time } = await encoder.encode(optionsList[i], remote);
			const blob = new Blob([buffer], { type: encoder.mimeType });
			const data = await decode(blob);

			const metrics = await this.measure(remote, data);

			results[i] = { time, buffer, data, metrics };
		}
	}

	async measure(wrapper: Comlink.Remote<WorkerApi>, data: ImageData) {
		const { SSIM, PSNR, butteraugli } = this.measureOptions;
		const metrics: Metrics = {};

		if (PSNR) {
			metrics.PSNR = await wrapper.calcPSNR(data);
		}
		if (SSIM) {
			metrics.SSIM = await wrapper.calcSSIM(data);
		}
		if (butteraugli) {
			const [source, raw] = await wrapper.calcButteraugli(data);

			const ctx = document.createElement("canvas").getContext("2d")!;
			const heatMap = ctx.createImageData(data.width, data.height);

			if (raw.byteLength / heatMap.width / heatMap.height === 4) {
				heatMap.data.set(new Uint8ClampedArray(raw));
			} else {
				heatMap.data.set(padAlpha(raw));
			}

			metrics.butteraugli = { source, heatMap };
		}

		return metrics;
	}
}

// If you want to use Uint32Array, remember that the endianness of each system might be different.
function padAlpha(input: ArrayBuffer) {
	const length = input.byteLength / 3 * 4;
	const rgb = new Uint8Array(input);
	const rgba = new Uint8Array(length);

	for (let j = 0, k = 0; j < length; j += 4, k += 3) {
		rgba[j] = rgb[k];
		rgba[j + 1] = rgb[k + 1];
		rgba[j + 2] = rgb[k + 2];
		rgba[j + 3] = 255;
	}
	return rgba;
}
