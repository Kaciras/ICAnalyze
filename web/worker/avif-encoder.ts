import * as Comlink from "comlink";
import avif_enc, { AVIFModule } from "./avif_enc";
import { EncodeWorker, initEmscriptenModule } from "./utils";
import wasmUrl from "./avif_enc.wasm";

export enum Subsample {
	YUV400 = 0,
	YUV420 = 1,
	YUV422 = 2,
	YUV444 = 3,
}

export interface AVIFEncodeOptions {
	minQuantizer: number;
	maxQuantizer: number;
	minQuantizerAlpha: number;
	maxQuantizerAlpha: number;
	tileRowsLog2: number;
	tileColsLog2: number;
	speed: number;
	subsample: Subsample;
}

let wasmModule: AVIFModule;
let imageToEncode: ImageData;

async function initialize(image: ImageData) {
	imageToEncode = image;
	wasmModule = await initEmscriptenModule(avif_enc, wasmUrl);
}

function encode(options: AVIFEncodeOptions) {
	const { data, width, height } = imageToEncode;

	const result = wasmModule.encode(data, width, height, options);
	if (!result) {
		throw new Error("Encoding error");
	}
	return result;
}

export type AvifWorker = EncodeWorker<AVIFEncodeOptions>;

Comlink.expose({ initialize, encode } as AvifWorker);
