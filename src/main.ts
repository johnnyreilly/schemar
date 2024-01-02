import * as core from "@actions/core";
import {
	processValidationResult,
	processValidationResponse,
	getValidationResponse,
	seeMoreMaker,
} from "./validate.js";
import type { Result } from "./validationResult.js";

export async function run(): Promise<void> {
	try {
		const urlsString = core.getInput("urls");
		const urls = urlsString.split("\n").map((url) => url.trim());

		const results: Result[] = [];
		for (const url of urls) {
			console.log(`Validating ${url} for structured data...`);

			try {
				const validationResult = processValidationResponse(
					await getValidationResponse(url),
				);
				const processedValidationResult =
					processValidationResult(validationResult);

				results.push({
					url,
					processedValidationResult,
				});
			} catch (err) {
				console.error(`Failed to validate ${url}`, err);
				results.push({
					url,
					processedValidationResult: {
						success: false,
						resultText: `Failed to validate ${url}. ${seeMoreMaker(url)}`,
					},
				});
			}
		}

		core.setOutput("results", results);

		if (results.every((result) => result.processedValidationResult.success)) {
			console.log(
				results
					.map((result) => result.processedValidationResult.resultText)
					.join("\n"),
			);
		} else {
			core.setFailed(
				results
					.filter((result) => result.processedValidationResult.success)
					.map((result) => result.processedValidationResult.resultText)
					.join("\n"),
			);
		}
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		core.setFailed(error instanceof Error ? error.message : `error: ${error}`);
	}
}
