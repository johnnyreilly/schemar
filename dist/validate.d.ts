import type { ProcessedValidationResult } from "./validationResult.js";
import { type ValidationResult } from "./validationResult.js";
export declare function getValidationResponse(url: string): Promise<string>;
export declare function processValidationResponse(url: string, responseText: string): ValidationResult | string;
export declare function processValidationResult(validationResult: ValidationResult | string): ProcessedValidationResult;
