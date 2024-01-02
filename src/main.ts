import * as core from "@actions/core";
import {
	processValidationResult,
	processValidationResponse,
	getValidationResponse,
} from "./validate.js";
import type { Result } from "./validationResult.js";

export async function run(): Promise<void> {
	const results: Result[] = [];
	try {
		const urlsString = core.getInput("urls");
		const urls = urlsString.split("\n").map((url) => url.trim());

		for (const url of urls) {
			console.log(`Validating ${url} for structured data...`);

			const validationResult = processValidationResponse(
				url,
				await getValidationResponse(url),
			);
			const processedValidationResult =
				processValidationResult(validationResult);

			results.push({
				url,
				processedValidationResult,
			});
		}

		core.setOutput("results", results);

		if (results.every((result) => result.processedValidationResult.success)) {
			console.log(
				results
					.map((result) => result.processedValidationResult.resultText)
					.join("\n"),
			);
		} else {
			const failedDetails = results
				.filter((result) => !result.processedValidationResult.success)
				.map((result) => result.processedValidationResult.resultText)
				.join("\n");

			console.error(failedDetails);
			core.setFailed(failedDetails);
		}
	} catch (error) {
		console.error('Unhandled error in "run" function');
		console.error(error);

		core.setOutput("results", results);

		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		core.setFailed(error instanceof Error ? error.message : `error: ${error}`);
	}
}
