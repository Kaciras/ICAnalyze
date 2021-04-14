import { Dispatch, MouseEvent, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import ResetIcon from "bootstrap-icons/icons/arrow-counterclockwise.svg";
import BrightnessIcon from "bootstrap-icons/icons/brightness-high.svg";
import PickColorIcon from "bootstrap-icons/icons/eyedropper.svg";
import { PinchZoomState } from "../ui/PinchZoom";
import { Button, NumberInput, PinchZoom, SwitchButton } from "../ui";
import { ConvertOutput } from "../encode";
import { InputImage } from "./index";
import { ButtonProps } from "../ui/Button";
import ColorPicker from "./ColorPicker";
import styles from "./ImageView.scss";

export enum ViewType {
	Original,
	Output,
	Difference,
	HeatMap,
}

interface ImageViewTabProps extends ButtonProps {
	target: string;
}

function useResettable<T>(initialState: T): [T, Dispatch<SetStateAction<T>>, () => void] {
	const [value, setValue] = useState(initialState);
	return [value, setValue, () => setValue(initialState)];
}

function drawDataToCanvas(data: ImageData, canvas: RefObject<HTMLCanvasElement>) {
	if (canvas.current === null) {
		throw new Error("Canvas is null");
	}
	const ctx = canvas.current.getContext("2d");
	if (!ctx) {
		throw new Error("Canvas not initialized");
	}
	ctx.putImageData(data, 0, 0);
}

interface ImageViewProps {
	original: InputImage;
	output: ConvertOutput;
}

export default function ImageView(props: ImageViewProps) {
	const { original, output } = props;
	const { width, height } = original.raw;
	const { butteraugli } = output.metrics;

	const [type, setType] = useState(ViewType.Output);
	const [picking, setPicking] = useState(false);
	const [inRegion, setInRegion] = useState(false);
	const [brightness, setBrightness] = useState(1);

	const [mousePos, setMousePos] = useState({ clientX: 0, clientY: 0 });

	const [pinchZoom, setPinchZoom, resetPinchZoom] = useResettable<PinchZoomState>({
		x: 0,
		y: 0,
		scale: 1,
	});

	const backCanvas = useRef<HTMLCanvasElement>(null);
	const topCanvas = useRef<HTMLCanvasElement>(null);

	const topImage = (type === ViewType.HeatMap) ? butteraugli!.heatMap : output.data;

	function refreshBottomCanvas() {
		resetPinchZoom();
		drawDataToCanvas(original.raw, backCanvas);
	}

	function refreshTopCanvas() {
		drawDataToCanvas(topImage, topCanvas);
	}

	useEffect(refreshBottomCanvas, [original]);
	useEffect(refreshTopCanvas, [topImage]);

	function handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		setMousePos({ clientX, clientY });
	}

	function setZoom(value: number) {
		setPinchZoom(prev => ({ ...prev, scale: value / 100 }));
	}

	const tabData = ["Original", "Output", "Difference", "HeatMap"]
		.map<ImageViewTabProps>(target => ({ target }));

	if (!butteraugli) {
		tabData[3].disabled = true;
		tabData[3].title = "Require enable butteraugli";
	}

	const imageViewTabs = tabData.map(data => {
		const { target, disabled, title } = data;
		const value = ViewType[target as keyof typeof ViewType];
		return (
			<Button
				key={value}
				type="text"
				active={type === value}
				disabled={disabled}
				title={title}
				onClick={() => setType(value)}
			>
				{target}
			</Button>
		);
	});

	let brightnessInput = null;
	let brightnessVal = 1;

	if (type === ViewType.Difference) {
		brightnessVal = brightness;
		brightnessInput = (
			<label
				title="Brightness"
				className={styles.option}
			>
				<BrightnessIcon className={styles.icon}/>
				<NumberInput
					className={styles.darkNumberInput}
					value={brightness}
					min={1}
					max={255}
					step={1}
					minMaxButton={true}
					onValueChange={setBrightness}
				/>
			</label>
		);
	}

	const wrapperCSS = {
		width, height,
		"--scale": pinchZoom.scale,
		"--x": pinchZoom.x + "px",
		"--y": pinchZoom.y + "px",
		"--brightness": `${brightnessVal}`,
	};

	const { clientX, clientY } = mousePos;
	const px = Math.floor((clientX - pinchZoom.x - (window.innerWidth - width * pinchZoom.scale) / 2) / pinchZoom.scale);
	const py = Math.floor((clientY - pinchZoom.y - (window.innerHeight - height * pinchZoom.scale) / 2) / pinchZoom.scale);

	const pickerCSS = {
		top: clientY,
		left: clientX,
	};

	const mixBlendMode = type === ViewType.Difference ? "difference" : undefined;

	return (
		<div className={styles.container}>
			<PinchZoom
				className={styles.imageView}
				state={pinchZoom}
				onChange={v => v.scale > 0.01 && setPinchZoom(v)}
			>
				<div
					className={styles.wrapper}
					style={wrapperCSS}
					onMouseOver={() => setInRegion(true)}
					onMouseMove={handleMouseMove}
					onMouseOut={() => setInRegion(false)}
				>
					<canvas
						className={styles.canvas}
						ref={backCanvas}
						width={width}
						height={height}
					/>
					<canvas
						className={styles.canvas}
						ref={topCanvas}
						width={width}
						height={height}
						style={{ mixBlendMode }}
						hidden={type === ViewType.Original}
					/>
				</div>
			</PinchZoom>

			<div className={styles.inputs}>
				<div>{imageViewTabs}</div>

				<div
					className={styles.option}
					title="Pick color"
				>
					<PickColorIcon className={styles.icon}/>
					<SwitchButton
						checked={picking}
						onValueChange={setPicking}
					/>
				</div>

				{brightnessInput}
			</div>

			<div className={styles.controls}>
				<NumberInput
					title="Zoom scale"
					min={1}
					step={1}
					increment={50}
					className={styles.zoomInput}
					value={Math.round(pinchZoom.scale * 100)}
					onValueChange={setZoom}
				/>
				<Button
					title="Reset view"
					type="text"
					className={styles.button}
					onClick={resetPinchZoom}
				>
					<ResetIcon/>
				</Button>
			</div>

			{
				picking && inRegion &&
				<ColorPicker
					style={pickerCSS}
					x={px}
					y={py}
					imageA={original.raw}
					imageB={output.data}
				/>
			}
		</div>
	);
}
