import { type ValidationResult } from "./validationResult.js";
export declare function validateUrl(url: string): Promise<ValidationResult>;
export interface ProcessedValidationResult {
    success: boolean;
    resultText: string;
}
export declare function processValidationResult(validationResult: ValidationResult): ProcessedValidationResult;
