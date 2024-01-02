import type { ProcessedValidationResult } from "./validationResult.js";
import { type ValidationResult } from "./validationResult.js";
export declare function getValidationResponse(url: string): Promise<string>;
export declare function processValidationResponse(responseText: string): ValidationResult;
export declare function processValidationResult(validationResult: ValidationResult): ProcessedValidationResult;
export declare function seeMoreMaker(url: string): string;
