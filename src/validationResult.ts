import { z } from "zod";

const nodeTypeSchema = z.object({
	pred: z.string(),
	value: z.string(),
	errors: z.unknown().array(),
	begin: z.number(),
	end: z.number(),
});
// type NodeType = z.infer<typeof nodeTypeSchema>;

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
	errors: z.unknown().array(),
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

export const validationResultSchema = z.object({
	url: z.string(),
	isRendered: z.boolean(),
	numObjects: z.number(),
	tripleGroups: tripleGroupSchema.array(),
	html: z.string(),
	errors: z.unknown().array(),
	totalNumErrors: z.number(),
	totalNumWarnings: z.number(),
});
export type ValidationResult = z.infer<typeof validationResultSchema>;
