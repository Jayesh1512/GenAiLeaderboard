// @ts-check

import { existsSync, readFileSync, writeFileSync } from "fs";
/**
 *
 * @param {string} file
 * @returns {Record<string, unknown>}
 */
export function read(file) {
	if (!existsSync(file)) {
		write(file, {});
		return {};
	}
	return JSON.parse(readFileSync(file, "utf-8"));
}

/**
 *
 * @param {string} file
 * @param {unknown} data
 */
export function write(file, data) {
	writeFileSync(file, typeof data === "string" ? data : JSON.stringify(data, null, 4));
}
