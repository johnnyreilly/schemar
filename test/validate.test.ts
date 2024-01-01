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

		const validationResult = processValidationResponse(text);
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(true);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given errors returns unsuccessfully", async () => {
		const text =
			prefix +
			(await fs.readFile(
				path.join(__dirname, "exampleValidStructuredDataValidation.json"),
				"utf8",
			));

		const validationResult = processValidationResponse(text);
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

		const validationResult = processValidationResponse(text);
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

		const validationResult = processValidationResponse(text);
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});
});
