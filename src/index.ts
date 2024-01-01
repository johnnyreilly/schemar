export * from "./validationResult.js";
import core from "@actions/core";
import github from "@actions/github";
import { validateUrl } from "./validate.js";

try {
	// `who-to-greet` input defined in action metadata file
	const url = core.getInput("url");

	const validationResult = await validateUrl(url);

	console.log(`Validated ${url}!
	
${validationResult.totalNumErrors} errors
${validationResult.totalNumWarnings} warnings`);

	const time = new Date().toTimeString();
	core.setOutput("time", time);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	core.setFailed(error instanceof Error ? error.message : `error: ${error}`);
}
