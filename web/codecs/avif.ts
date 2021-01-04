import { Remote } from "comlink";
import { EnumTemplate, NumberRangeTemplate } from "../app/OptionTemplate";
import { WorkerApi } from "../worker";
import { OptionTemplate } from "./index";

export const name = "AVIF";
export const mimeType = "image/avif";
export const extension = "avif";

export const Subsampling = {
	YUV400: 0,
	YUV420: 1,
	YUV422: 2,
	YUV444: 3,
};

export function encode(options: any, worker: Remote<WorkerApi>) {
	return worker.avifEncode(options);
}

export const optionTemplate: OptionTemplate[] = [
	{
		label: "minQuantizer",
		name: "minQuantizer",
		type: new NumberRangeTemplate(0, 63, 33),
		defaultVariable: true,
	},
	{
		label: "maxQuantizer",
		name: "maxQuantizer",
		type: new NumberRangeTemplate(0, 63, 63),
	},
	{
		label: "minQuantizerAlpha",
		name: "minQuantizer",
		type: new NumberRangeTemplate(0, 63, 33),
		defaultVariable: true,
	},
	{
		label: "maxQuantizerAlpha",
		name: "maxQuantizerAlpha",
		type: new NumberRangeTemplate(0, 63, 63),
	},
	{
		label: "speed",
		name: "speed",
		type: new NumberRangeTemplate(0, 10, 8),
	},
	{
		label: "subsample",
		name: "subsample",
		type: new EnumTemplate(Subsampling, "YUV420"),
	},
];