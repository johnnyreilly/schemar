import { ZodError } from "zod";
import {
	type ValidationResult,
	validationResultSchema,
} from "./validationResult.js";
import { fromZodError } from "zod-validation-error";

export async function validateUrl(url: string): Promise<ValidationResult> {
	try {
		const response = await fetch("https://validator.schema.org/validate", {
			headers: {
				// "accept": "*/*",
				// "accept-language": "en-GB,en;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6",
				"cache-control": "no-cache",
				"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
				// "pragma": "no-cache",
				// "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
				// "sec-ch-ua-mobile": "?0",
				// "sec-ch-ua-platform": "\"Linux\"",
				// "sec-fetch-dest": "empty",
				// "sec-fetch-mode": "cors",
				// "sec-fetch-site": "same-origin",
				// "Referer": "https://validator.schema.org/",
				// "Referrer-Policy": "strict-origin-when-cross-origin"
			},
			body: `url=${encodeURIComponent(url)}`,
			method: "POST",
		});
		const text = await response.text();
		const json = text.substring(text.indexOf("\n"));
		const validationResult = validationResultSchema.parse(JSON.parse(json));
		return validationResult;
	} catch (err) {
		if (err instanceof ZodError) {
			const validationError = fromZodError(err);

			console.error(validationError);
		}
		throw err;
	}
}

export interface ProcessedValidationResult {
	success: boolean;
	resultText: string;
}

export function processValidationResult(
	validationResult: ValidationResult,
): ProcessedValidationResult {
	if (validationResult.numObjects === 0) {
		return {
			success: false,
			resultText: `Validated ${validationResult.url} and found no structured data`,
		};
	}

	if (
		validationResult.totalNumErrors > 0 ||
		validationResult.totalNumWarnings > 0
	) {
		return {
			success: false,
			resultText: `Validated ${validationResult.url} and failed with ${validationResult.totalNumErrors} errors and ${validationResult.totalNumWarnings} warnings`,
		};
	}

	return {
		success: true,
		resultText: `Validated ${validationResult.url}!`,
	};
}
