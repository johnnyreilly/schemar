import { z } from "zod";

const nodeTypeSchema = z.object({
	pred: z.string(),
	value: z.string(),
	errors: z.unknown().array(),
	begin: z.number(),
	end: z.number(),
});
// type NodeType = z.infer<typeof nodeTypeSchema>;

const errorSchema = z.object({
	ownerSet: z.object({ SPORE: z.boolean() }),
	errorType: z.string(),
	args: z.array(z.string()),
	begin: z.number(),
	end: z.number(),
	isSevere: z.boolean(),
	errorID: z.number(),
	ownerToSeverity: z.object({ SPORE: z.string() }),
});

const baseNodePropertiesSchema = z.object({
	pred: z.string(),
	errors: z.unknown().array(),
	begin: z.number(),
	end: z.number(),
});

type NodeProperties = z.infer<typeof baseNodePropertiesSchema> & {
	target: Node;
};

const nodePropertiesSchema: z.ZodType<NodeProperties> =
	baseNodePropertiesSchema.extend({
		target: z.lazy(() => nodeSchema),
	});

const nodeSchema = z.object({
	types: nodeTypeSchema.array(),
	typeGroup: z.string(),
	idProperty: nodeTypeSchema.optional(),
	errors: errorSchema.array(),
	properties: nodeTypeSchema.array(),
	nodeProperties: nodePropertiesSchema.array(),
	numErrors: z.number(),
	numWarnings: z.number(),
});
type Node = z.infer<typeof nodeSchema>;

const tripleGroupSchema = z.object({
	ownerSet: z.unknown(),
	nodes: nodeSchema.array(),
	numNodesWithError: z.number(),
	numNodesWithWarning: z.number(),
	numErrors: z.number(),
	numWarnings: z.number(),
	type: z.string(),
});
// type TripleGroup = z.infer<typeof tripleGroupSchema>;

//{"fetchError":"OTHER","isRendered":false,"numObjects":0,"totalNumErrors":0,"totalNumWarnings":0}
//{"fetchError":"NOT_FOUND","isRendered":false,"numObjects":0,"totalNumErrors":0,"totalNumWarnings":0}
export const validationResultSchema = z.object({
	fetchError: z.enum(["OTHER", "NOT_FOUND"]).optional(),
	url: z.string().optional(),
	isRendered: z.boolean(),
	numObjects: z.number(),
	tripleGroups: tripleGroupSchema.array().optional(),
	html: z.string().optional(),
	errors: errorSchema.array().optional(),
	totalNumErrors: z.number(),
	totalNumWarnings: z.number(),
});
export type ValidationResultRaw = z.infer<typeof validationResultSchema>;

export type ValidationResult = Omit<
	{
		[K in keyof ValidationResultRaw]-?: K extends
			| "tripleGroups"
			| "html"
			| "url"
			| "errors"
			? ValidationResultRaw[K]
			: ValidationResultRaw[K];
	},
	"fetchError"
>;

export interface ProcessedValidationResult {
	success: boolean;
	resultText: string;
}

export interface Result {
	url: string;
	// appears to be too large to use in a GitHub Action output
	// validationResult: ValidationResult;
	processedValidationResult: ProcessedValidationResult;
}
