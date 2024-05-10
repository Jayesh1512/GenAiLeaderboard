// @ts-check
import { write } from "./utils.js";

function init() {
	const template = `const cred = [
		{
			"user": "your mail",
			"pass": "password"
		},
		{
			"user": "Another mail",
			"pass": "password"
		}
	]
	module.exports = cred;
		`;

	write("../src/progressMailReport/cred.js", template);
	write("../src/progressMailReport/progress.json", "[]");
}

init();
