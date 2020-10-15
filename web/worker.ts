import * as Comlink from "comlink";
import type * as WebP from "squoosh/src/codecs/webp/encoder-meta";
import type * as AVIF from "squoosh/src/codecs/avif/encoder-meta";

let data: ImageData;

export enum Subsample {
	YUV400 = 0,
	YUV420 = 1,
	YUV422 = 2,
	YUV444 = 3,
}

const workerApi = {

	setImageToEncode(image: ImageData) {
		data = image;
	},

	async webpEncode(options: WebP.EncodeOptions) {
		return (await import("squoosh/src/codecs/webp/encoder")).encode(data, options);
	},

	async webpDecode(data: ArrayBuffer) {
		return (await import("squoosh/src/codecs/webp/decoder")).decode(data);
	},

	async avifEncode(options: AVIF.EncodeOptions) {
		return (await import("squoosh/src/codecs/avif/encoder")).encode(data, options);
	},

	async avifDecode(data: ArrayBuffer): Promise<ImageData> {
		return (await import("squoosh/src/codecs/avif/decoder")).decode(data);
	},
};

Comlink.expose(workerApi);

export type WorkerApi = typeof workerApi;
