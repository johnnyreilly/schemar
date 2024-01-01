import { type ValidationResult } from "./validationResult.js";
export declare function getValidationResponse(url: string): Promise<string>;
export declare function processValidationResponse(responseText: string): ValidationResult;
export interface ProcessedValidationResult {
    success: boolean;
    resultText: string;
}
export declare function processValidationResult(validationResult: ValidationResult): ProcessedValidationResult;
