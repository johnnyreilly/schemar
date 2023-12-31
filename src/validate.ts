import { ZodError } from "zod";
import type { ProcessedValidationResult } from "./validationResult.js";
import {
	type ValidationResult,
	validationResultSchema,
} from "./validationResult.js";
import { fromZodError } from "zod-validation-error";

export async function getValidationResponse(url: string): Promise<string> {
	try {
		const response = await fetch("https://validator.schema.org/validate", {
			headers: {
				"cache-control": "no-cache",
				"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
			},
			body: `url=${encodeURIComponent(url)}`,
			method: "POST",
		});

		if (!response.ok) {
			console.error(`Received a ${response.statusText}`);
			return "";
		}

		const text = await response.text();

		return text;
	} catch (err) {
		console.error(`Failed to get validation response for ${url}`, err);
		return "";
	}
}

export function processValidationResponse(
	url: string,
	responseText: string,
): ValidationResult | string {
	const seeMore = seeMoreMaker(url);

	try {
		if (!responseText) {
			return `Received an empty response - ${seeMore}`;
		}

		if (!responseText.indexOf("\n")) {
			return `Received an unexpected response:

${responseText}

${seeMore}`;
		}

		const json = responseText.substring(responseText.indexOf("\n"));
		const validationResult = validationResultSchema.parse(JSON.parse(json));

		if (validationResult.fetchError) {
			return `Received a fetchError from the validator: ${validationResult.fetchError} - is your URL valid? ${seeMore}`;
		}

		if (
			!validationResult.html ||
			!validationResult.errors ||
			!validationResult.url ||
			!validationResult.tripleGroups
		) {
			return `Received an unexpected response, missing required properties of html, errors, url or tripleGroups:

${responseText}

${seeMore}`;
		}
		return validationResult as ValidationResult;
	} catch (err) {
		if (err instanceof ZodError) {
			const validationError = fromZodError(err);

			console.error(validationError);
			return `Failed to parse validation response for ${url}:

${validationError.message}

${seeMore}`;
		}
		return `Failed to parse validation response for ${url} - ${seeMore}`;
	}
}

export function processValidationResult(
	validationResult: ValidationResult | string,
): ProcessedValidationResult {
	if (typeof validationResult === "string") {
		return {
			success: false,
			resultText: validationResult,
		};
	}

	const seeMore = seeMoreMaker(validationResult.url);

	if (validationResult.numObjects === 0) {
		return {
			success: false,
			resultText: `Validated ${validationResult.url} and found no structured data
${seeMore}
`,
		};
	}

	if (
		validationResult.totalNumErrors > 0 ||
		validationResult.totalNumWarnings > 0
	) {
		return {
			success: false,
			resultText: `Validated ${validationResult.url} and failed with ${validationResult.totalNumErrors} errors and ${validationResult.totalNumWarnings} warnings
${seeMore}
`,
		};
	}

	return {
		success: true,
		resultText: `${validationResult.url} has structured data of these types:
${validationResult.tripleGroups.map((group) => ` - ${group.type}`).join("\n")}

${seeMore}
`,
	};
}

function seeMoreMaker(url: string) {
	return `For more details see https://validator.schema.org/#url=${encodeURIComponent(
		url,
	)}`;
}
