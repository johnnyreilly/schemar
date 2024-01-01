import fs from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { fromZodError } from "zod-validation-error";

import { validationResultSchema } from "../src/validationResult.js";
import path from "node:path";
import { ZodError } from "zod";

describe("validate", () => {
	it("json parses successfully", async () => {
		const json = await fs.readFile(
			path.join(__dirname, "exampleValidation.json"),
			"utf8",
		);

		try {
			const validationResult = validationResultSchema.parse(JSON.parse(json));

			// test recursive structure is parsed correctly by checking a nested property
			expect(
				validationResult.tripleGroups[0].nodes[0].nodeProperties[0].target
					.typeGroup,
			).toBe("Person");

			expect(validationResult).toBeTruthy();
			console.log(validationResult);
		} catch (err) {
			if (err instanceof ZodError) {
				const validationError = fromZodError(err);

				console.log(validationError);
			}
			throw err;
		}
	});
});
