import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { processValidationResult } from "../src/validate.js";
import { validationResultSchema } from "../src/validationResult.js";
import path from "node:path";

describe("processValidationResult", () => {
	it("given valid schema without errors / warnings returns successfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidStructuredDataValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(true);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given errors returns unsuccessfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidStructuredDataValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		validationResult.totalNumErrors = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given warnings returns unsuccessfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidStructuredDataValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		validationResult.totalNumWarnings = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});

	it("given no structured data returns unsuccessfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleNoStructuredDataValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult.success).toBe(false);
		expect(processedValidationResult).toMatchSnapshot();
	});
});
