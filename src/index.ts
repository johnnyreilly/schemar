// export * from "./greet.js";
// export * from "./types.js";
import core from "@actions/core";
import github from "@actions/github";

try {
	// `who-to-greet` input defined in action metadata file
	const nameToGreet = core.getInput("url");

	console.log(`Hello ${nameToGreet}!`);
	const time = new Date().toTimeString();
	core.setOutput("time", time);
	// Get the JSON webhook payload for the event that triggered the workflow
	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`The event payload: ${payload}`);
} catch (error) {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	core.setFailed(error instanceof Error ? error.message : `error: ${error}`);
}
