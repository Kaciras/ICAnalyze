import React, { useState } from "react";
import clsx from "clsx";
import { defaultOptions, EncodeOptions } from "squoosh/src/codecs/webp/encoder-meta";
import { WebPOptionsTemplate } from "../codecs";
import { MeasureOptions } from "../encode";
import Styles from "./ConfigDialog.scss";
import OptionsDialog, { OptionsInstance } from "./OptionsPanel";
import { Dialog, Button } from "../ui";
import ImageInfoPanel from "./ImageInfoPanel";
import MetricsPanel from "./MetricsPanel";

interface Props {
	image: ImageData;
	file: File;
	onStart: (optionsList: any[], measure: MeasureOptions, workerCount: number) => void;
	onClose: () => void;
	onSelectFile: () => void;
}

/**
 * Get available logic processor count.
 */
function cpuCount() {
	return navigator.hardwareConcurrency || 4;
}

export default function ConfigDialog(props: Props) {
	const { file, image, onStart, onClose, onSelectFile } = props;

	const [vars, setVars] = useState<string[]>(() => WebPOptionsTemplate
		.filter(t => t.defaultVariable).map(t => t.name));

	const [options, setOptions] = useState<OptionsInstance>({});

	const [workerCount, setWorkerCount] = useState(cpuCount);
	const [measure, setMeasure] = useState<MeasureOptions>({
		time: false,
		SSIM: false,
		PSNR: true,
		butteraugli: false,
	});

	// TODO: stub options
	async function start() {
		const optionsList = new Array<EncodeOptions>(101);
		for (let i = 0; i < 101; i++) {
			optionsList[i] = { ...defaultOptions, quality: i };
		}
		onStart(optionsList, measure, workerCount);
	}

	const [index, setIndex] = useState(0);

	const panels = ["Select File", "Options", "Metrics"];

	const tabs = [];
	for (let i = 0; i < panels.length; i++) {
		const name = panels[i];
		const clazz = i === index ? clsx(Styles.tab, Styles.active) : Styles.tab;
		tabs.push(<div key={i} className={clazz} onClick={() => setIndex(i)}>{name}</div>);
	}

	let panel;

	switch (index) {
		case 0:
			panel = <ImageInfoPanel
				file={file}
				image={image}
			/>;
			break;
		case 1:
			panel = <OptionsDialog
				vars={vars}
				options={options}
				onVarsChange={setVars}
			/>;
			break;
		case 2:
			panel = <MetricsPanel
				workerCount={workerCount}
				options={measure}
				onWorkerCountChange={setWorkerCount}
				onMeasureChange={setMeasure}
			/>;
			break;
		default:
			throw new Error();
	}

	return (
		<Dialog className={Styles.dialog} onClose={onClose}>
			<div className={Styles.header}>{tabs}</div>
			{panel}
			<div className="dialog-actions">
				<Button onClick={onSelectFile}>Select file</Button>
				<Button color="second" onClick={onClose}>Cancel</Button>
				<Button disabled={!file} onClick={start}>Start</Button>
			</div>
		</Dialog>
	);
}
