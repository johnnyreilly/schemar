import core from "@actions/core";
import { processValidationResult, validateUrl } from "./validate.js";

export async function run(): Promise<void> {
	try {
		const url = core.getInput("url");

		const validationResult = await validateUrl(url);
		const processedValidationResult = processValidationResult(validationResult);

		core.setOutput("validationResult", validationResult);
		core.setOutput("processedValidationResult", processedValidationResult);

		if (processedValidationResult.success) {
			console.log(processedValidationResult.resultText);
		} else {
			core.setFailed(processedValidationResult.resultText);
		}

		console.log(processedValidationResult.resultText);
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		core.setFailed(error instanceof Error ? error.message : `error: ${error}`);
	}
}
