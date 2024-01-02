import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import {
	processValidationResponse,
	processValidationResult,
} from "../src/validate.js";
import path from "node:path";

const prefix = `)]}'
`;

describe("processValidationResult", () => {
	it("given valid schema without errors / warnings returns successfully", async () => {
		const text =
			prefix +
			(await fs.readFile(
				path.join(__dirname, "exampleValidStructuredDataValidation.json"),
				"utf8",
			));

		const validationResult = processValidationResponse(
			"https://deploy-preview-9669--docusaurus-2.netlify.app/blog/releases/2.4/",
			text,
		);
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(true);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given errors returns unsuccessfully", async () => {
		const text =
			prefix +
			(await fs.readFile(
				path.join(__dirname, "exampleInvalidStructuredDataValidation.json"),
				"utf8",
			));

		const validationResult = processValidationResponse(
			"https://thankful-sky-0bfc7e803-804.westeurope.1.azurestaticapps.net/",
			text,
		);
		if (typeof validationResult === "string") {
			throw new Error("validationResult is string");
		}
		validationResult.totalNumErrors = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given warnings returns unsuccessfully", async () => {
		const text =
			prefix +
			(await fs.readFile(
				path.join(__dirname, "exampleValidStructuredDataValidation.json"),
				"utf8",
			));

		const validationResult = processValidationResponse(
			"https://deploy-preview-9669--docusaurus-2.netlify.app/blog/releases/2.4/",
			text,
		);
		if (typeof validationResult === "string") {
			throw new Error("validationResult is string");
		}
		validationResult.totalNumWarnings = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given no structured data returns unsuccessfully", async () => {
		const text =
			prefix +
			(await fs.readFile(
				path.join(__dirname, "exampleNoStructuredDataValidation.json"),
				"utf8",
			));

		const validationResult = processValidationResponse(
			"https://news.ycombinator.com/",
			text,
		);
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});
});
