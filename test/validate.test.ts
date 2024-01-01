import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { processValidationResult } from "../src/validate.js";
import { validationResultSchema } from "../src/validationResult.js";
import path from "node:path";

describe("processValidationResult", () => {
	it("valid schema without errors / warnings returns successfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult).toMatchSnapshot();
	});

	it("errors returns unsuccessfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		validationResult.totalNumErrors = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult).toMatchSnapshot();
	});

	it("warnings returns unsuccessfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidation.json"),
			"utf8",
		);

		const validationResult = validationResultSchema.parse(JSON.parse(json));
		validationResult.totalNumWarnings = 1;
		const processedValidationResult = processValidationResult(validationResult);

		expect(processedValidationResult).toMatchSnapshot();
	});
});
