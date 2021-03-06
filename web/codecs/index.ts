import { Dispatch } from "react";
import { Remote } from "comlink";
import { ControlType, OptionsKeyPair } from "../form";
import { WorkerApi } from "../worker";
import * as MozJPEG from "./mozjpeg/client";
import * as JXL from "./jxl/client";
import * as WebP from "./webp/client";
import * as AVIF from "./avif/client";
import * as WebP2 from "./webp2/client";

export interface EncoderState {
	varNames: string[];
	values: Record<string, unknown>;
	ranges: Record<string, unknown>;
}

export interface EncodeResult {
	time: number;
	buffer: ArrayBuffer;
}

export interface OptionPanelProps {
	state: EncoderState;
	onChange: Dispatch<EncoderState>;
}

export interface ImageEncoder {
	name: string;
	extension: string;
	mimeType: string;

	getState(saved?: EncoderState): EncoderState;

	OptionsPanel(props: OptionPanelProps): JSX.Element;

	getOptionsList(state: EncoderState): OptionsKeyPair[];

	getControls(state: EncoderState): ControlType[];

	encode(options: any, worker: Remote<WorkerApi>): Promise<EncodeResult>;
}

export const ENCODERS: ImageEncoder[] = [MozJPEG, JXL, WebP, AVIF, WebP2];

export const ENCODER_MAP = Object.fromEntries(ENCODERS.map(e => [e.name, e]));
