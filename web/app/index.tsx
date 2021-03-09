import { useState } from "react";
import CompressSession, { ImageToEncoderNames } from "./CompressSession";
import IntroPage from "./IntroPage";
import AnalyzePage from "./AnalyzePage";

export interface InputImage {
	file: File;
	data: ImageData;
}

export interface Result {
	original: InputImage;
	state: Record<string, any>;
	map: ImageToEncoderNames;
}

export default function App() {
	const [isOpen, setOpen] = useState(false);
	const [result, setResult] = useState<Result>();

	function handleChange(value: Result) {
		setOpen(false);
		setResult(value);
	}

	const showDialog = () => setOpen(true);

	return (
		<>
			{result
				? <AnalyzePage result={result} onStart={showDialog}/>
				: <IntroPage onStart={showDialog}/>
			}
			<CompressSession
				open={isOpen}
				onChange={handleChange}
				onClose={() => setOpen(false)}
			/>
		</>
	);
}
