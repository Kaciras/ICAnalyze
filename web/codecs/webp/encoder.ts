/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { EncodeOptions, WebPModule as EncodeModule } from "squoosh/codecs/webp/enc/webp_enc";

import { initEmscriptenModule } from "squoosh/src/features/worker-utils";
import { simd } from "wasm-feature-detect";

import encodeWasmUrl from "squoosh/codecs/webp/enc/webp_enc.wasm";
import encodeWasmUrlWithSIMD from "squoosh/codecs/webp/enc/webp_enc_simd.wasm";

export { EncodeOptions };

let emscriptenModule: Promise<EncodeModule>;

async function init() {
	if (await simd()) {
		const webpEncoder = await import("squoosh/codecs/webp/enc/webp_enc_simd");
		return initEmscriptenModule(webpEncoder.default, encodeWasmUrlWithSIMD);
	}
	const webpEncoder = await import("squoosh/codecs/webp/enc/webp_enc");
	return initEmscriptenModule(webpEncoder.default, encodeWasmUrl);
}

export async function encode(data: ImageData, options: EncodeOptions): Promise<ArrayBuffer> {
	if (!emscriptenModule) emscriptenModule = init();

	const module = await emscriptenModule;
	const result = module.encode(data.data, data.width, data.height, options);

	if (!result) throw new Error("Encoding error.");

	return result.buffer;
}
