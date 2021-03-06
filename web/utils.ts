import { useState } from "react";

/**
 * No effect function with a clear name.
 */
export const NOOP = () => {};

export const IDENTITY = (v: any) => v;

const SIZE_UNITS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];

/**
 * Convert bytes to a human readable string.
 *
 * @param value The number to format.
 * @param fraction
 */
export function bytes(value: number, fraction = 1024) {
	const size = Math.abs(value);

	if (size === 0) {
		return `${value.toFixed(2)} B`;
	}

	const i = ~~(Math.log2(size) / Math.log2(fraction));
	const v = value / (fraction ** i);
	return `${v.toFixed(2)} ${SIZE_UNITS[i]}B`;
}

export async function getFileFromUrl(url: string, signal?: AbortSignal) {
	const response = await fetch(url, { signal });
	const blob = await response.blob();

	// Firefox doesn't like content types like 'image/png; charset=UTF-8', which Webpack's dev
	// server returns. https://bugzilla.mozilla.org/show_bug.cgi?id=1497925.
	const type = /[^;]*/.exec(blob.type)![0];
	const name = new URL(url).pathname.split("/").pop() || "image";

	const timeHeader = response.headers.get("last-modified");
	const lastModified = timeHeader ? new Date(timeHeader).getTime() : undefined;

	return new File([blob], name, { type, lastModified });
}

export function useProgress(initialMax = 1) {
	const [max, setMax] = useState(initialMax);
	const [value, setValue] = useState(0);

	function reset(value: number) {
		setValue(0);
		setMax(value);
	}

	function increase() {
		setValue(v => v + 1);
	}

	return { value, max, increase, reset };
}
