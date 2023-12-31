import { z } from "zod";
import { GreetOptions } from "./types.js";

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

export const validationSchema = z.object({
	url: z.string(),
	isRendered: z.boolean(),
	tripleGroups: tripleGroupSchema.array(),
	html: z.string(),
	errors: z.unknown().array(),
	totalNumErrors: z.number(),
	totalNumWarnings: z.number(),
});
// type Validation = z.infer<typeof validationSchema>;

export async function greet(options: GreetOptions | string) {
	const x = await fetch("https://validator.schema.org/validate", {
		headers: {
			// "accept": "*/*",
			// "accept-language": "en-GB,en;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6",
			"cache-control": "no-cache",
			"content-type": "application/x-www-form-urlencoded;charset=UTF-8",
			// "pragma": "no-cache",
			// "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
			// "sec-ch-ua-mobile": "?0",
			// "sec-ch-ua-platform": "\"Linux\"",
			// "sec-fetch-dest": "empty",
			// "sec-fetch-mode": "cors",
			// "sec-fetch-site": "same-origin",
			// "Referer": "https://validator.schema.org/",
			// "Referrer-Policy": "strict-origin-when-cross-origin"
		},
		body: "url=https%3A%2F%2Fdeploy-preview-9669--docusaurus-2.netlify.app%2Fblog%2Freleases%2F2.4%2F",
		method: "POST",
	})
		.then((response) => response.text())
		.then((text) => {
			const json = text.substring(text.indexOf("\n"));
			const data = JSON.parse(json);
			delete data.html;
			console.log(data);
			console.log(data.tripleGroups);
			return data;
		});
}
