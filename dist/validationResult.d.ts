import { z } from "zod";
declare const baseNodePropertiesSchema: z.ZodObject<
	{
		pred: z.ZodString;
		errors: z.ZodArray<z.ZodUnknown, "many">;
		begin: z.ZodNumber;
		end: z.ZodNumber;
	},
	"strip",
	z.ZodTypeAny,
	{
		pred: string;
		errors: unknown[];
		begin: number;
		end: number;
	},
	{
		pred: string;
		errors: unknown[];
		begin: number;
		end: number;
	}
>;
type NodeProperties = z.infer<typeof baseNodePropertiesSchema> & {
	target: Node;
};
declare const nodeSchema: z.ZodObject<
	{
		types: z.ZodArray<
			z.ZodObject<
				{
					pred: z.ZodString;
					value: z.ZodString;
					errors: z.ZodArray<z.ZodUnknown, "many">;
					begin: z.ZodNumber;
					end: z.ZodNumber;
				},
				"strip",
				z.ZodTypeAny,
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				},
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}
			>,
			"many"
		>;
		typeGroup: z.ZodString;
		idProperty: z.ZodOptional<
			z.ZodObject<
				{
					pred: z.ZodString;
					value: z.ZodString;
					errors: z.ZodArray<z.ZodUnknown, "many">;
					begin: z.ZodNumber;
					end: z.ZodNumber;
				},
				"strip",
				z.ZodTypeAny,
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				},
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}
			>
		>;
		errors: z.ZodArray<z.ZodUnknown, "many">;
		properties: z.ZodArray<
			z.ZodObject<
				{
					pred: z.ZodString;
					value: z.ZodString;
					errors: z.ZodArray<z.ZodUnknown, "many">;
					begin: z.ZodNumber;
					end: z.ZodNumber;
				},
				"strip",
				z.ZodTypeAny,
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				},
				{
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}
			>,
			"many"
		>;
		nodeProperties: z.ZodArray<
			z.ZodType<NodeProperties, z.ZodTypeDef, NodeProperties>,
			"many"
		>;
		numErrors: z.ZodNumber;
		numWarnings: z.ZodNumber;
	},
	"strip",
	z.ZodTypeAny,
	{
		errors: unknown[];
		types: {
			pred: string;
			value: string;
			errors: unknown[];
			begin: number;
			end: number;
		}[];
		typeGroup: string;
		properties: {
			pred: string;
			value: string;
			errors: unknown[];
			begin: number;
			end: number;
		}[];
		nodeProperties: NodeProperties[];
		numErrors: number;
		numWarnings: number;
		idProperty?:
			| {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
			  }
			| undefined;
	},
	{
		errors: unknown[];
		types: {
			pred: string;
			value: string;
			errors: unknown[];
			begin: number;
			end: number;
		}[];
		typeGroup: string;
		properties: {
			pred: string;
			value: string;
			errors: unknown[];
			begin: number;
			end: number;
		}[];
		nodeProperties: NodeProperties[];
		numErrors: number;
		numWarnings: number;
		idProperty?:
			| {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
			  }
			| undefined;
	}
>;
type Node = z.infer<typeof nodeSchema>;
export declare const validationResultSchema: z.ZodObject<
	{
		url: z.ZodString;
		isRendered: z.ZodBoolean;
		numObjects: z.ZodNumber;
		tripleGroups: z.ZodArray<
			z.ZodObject<
				{
					ownerSet: z.ZodUnknown;
					nodes: z.ZodArray<
						z.ZodObject<
							{
								types: z.ZodArray<
									z.ZodObject<
										{
											pred: z.ZodString;
											value: z.ZodString;
											errors: z.ZodArray<z.ZodUnknown, "many">;
											begin: z.ZodNumber;
											end: z.ZodNumber;
										},
										"strip",
										z.ZodTypeAny,
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										},
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										}
									>,
									"many"
								>;
								typeGroup: z.ZodString;
								idProperty: z.ZodOptional<
									z.ZodObject<
										{
											pred: z.ZodString;
											value: z.ZodString;
											errors: z.ZodArray<z.ZodUnknown, "many">;
											begin: z.ZodNumber;
											end: z.ZodNumber;
										},
										"strip",
										z.ZodTypeAny,
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										},
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										}
									>
								>;
								errors: z.ZodArray<z.ZodUnknown, "many">;
								properties: z.ZodArray<
									z.ZodObject<
										{
											pred: z.ZodString;
											value: z.ZodString;
											errors: z.ZodArray<z.ZodUnknown, "many">;
											begin: z.ZodNumber;
											end: z.ZodNumber;
										},
										"strip",
										z.ZodTypeAny,
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										},
										{
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
										}
									>,
									"many"
								>;
								nodeProperties: z.ZodArray<
									z.ZodType<NodeProperties, z.ZodTypeDef, NodeProperties>,
									"many"
								>;
								numErrors: z.ZodNumber;
								numWarnings: z.ZodNumber;
							},
							"strip",
							z.ZodTypeAny,
							{
								errors: unknown[];
								types: {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
								}[];
								typeGroup: string;
								properties: {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
								}[];
								nodeProperties: NodeProperties[];
								numErrors: number;
								numWarnings: number;
								idProperty?:
									| {
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
									  }
									| undefined;
							},
							{
								errors: unknown[];
								types: {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
								}[];
								typeGroup: string;
								properties: {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
								}[];
								nodeProperties: NodeProperties[];
								numErrors: number;
								numWarnings: number;
								idProperty?:
									| {
											pred: string;
											value: string;
											errors: unknown[];
											begin: number;
											end: number;
									  }
									| undefined;
							}
						>,
						"many"
					>;
					numNodesWithError: z.ZodNumber;
					numNodesWithWarning: z.ZodNumber;
					numErrors: z.ZodNumber;
					numWarnings: z.ZodNumber;
					type: z.ZodString;
				},
				"strip",
				z.ZodTypeAny,
				{
					type: string;
					numErrors: number;
					numWarnings: number;
					nodes: {
						errors: unknown[];
						types: {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
						}[];
						typeGroup: string;
						properties: {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
						}[];
						nodeProperties: NodeProperties[];
						numErrors: number;
						numWarnings: number;
						idProperty?:
							| {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
							  }
							| undefined;
					}[];
					numNodesWithError: number;
					numNodesWithWarning: number;
					ownerSet?: unknown;
				},
				{
					type: string;
					numErrors: number;
					numWarnings: number;
					nodes: {
						errors: unknown[];
						types: {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
						}[];
						typeGroup: string;
						properties: {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
						}[];
						nodeProperties: NodeProperties[];
						numErrors: number;
						numWarnings: number;
						idProperty?:
							| {
									pred: string;
									value: string;
									errors: unknown[];
									begin: number;
									end: number;
							  }
							| undefined;
					}[];
					numNodesWithError: number;
					numNodesWithWarning: number;
					ownerSet?: unknown;
				}
			>,
			"many"
		>;
		html: z.ZodString;
		errors: z.ZodArray<z.ZodUnknown, "many">;
		totalNumErrors: z.ZodNumber;
		totalNumWarnings: z.ZodNumber;
	},
	"strip",
	z.ZodTypeAny,
	{
		errors: unknown[];
		url: string;
		isRendered: boolean;
		numObjects: number;
		tripleGroups: {
			type: string;
			numErrors: number;
			numWarnings: number;
			nodes: {
				errors: unknown[];
				types: {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}[];
				typeGroup: string;
				properties: {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}[];
				nodeProperties: NodeProperties[];
				numErrors: number;
				numWarnings: number;
				idProperty?:
					| {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
					  }
					| undefined;
			}[];
			numNodesWithError: number;
			numNodesWithWarning: number;
			ownerSet?: unknown;
		}[];
		html: string;
		totalNumErrors: number;
		totalNumWarnings: number;
	},
	{
		errors: unknown[];
		url: string;
		isRendered: boolean;
		numObjects: number;
		tripleGroups: {
			type: string;
			numErrors: number;
			numWarnings: number;
			nodes: {
				errors: unknown[];
				types: {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}[];
				typeGroup: string;
				properties: {
					pred: string;
					value: string;
					errors: unknown[];
					begin: number;
					end: number;
				}[];
				nodeProperties: NodeProperties[];
				numErrors: number;
				numWarnings: number;
				idProperty?:
					| {
							pred: string;
							value: string;
							errors: unknown[];
							begin: number;
							end: number;
					  }
					| undefined;
			}[];
			numNodesWithError: number;
			numNodesWithWarning: number;
			ownerSet?: unknown;
		}[];
		html: string;
		totalNumErrors: number;
		totalNumWarnings: number;
	}
>;
export type ValidationResult = z.infer<typeof validationResultSchema>;
export {};
