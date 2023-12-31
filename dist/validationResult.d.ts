import { z } from "zod";
declare const baseNodePropertiesSchema: z.ZodObject<{
    pred: z.ZodString;
    errors: z.ZodArray<z.ZodUnknown, "many">;
    begin: z.ZodNumber;
    end: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    pred: string;
    errors: unknown[];
    begin: number;
    end: number;
}, {
    pred: string;
    errors: unknown[];
    begin: number;
    end: number;
}>;
type NodeProperties = z.infer<typeof baseNodePropertiesSchema> & {
    target: Node;
};
declare const nodeSchema: z.ZodObject<{
    types: z.ZodArray<z.ZodObject<{
        pred: z.ZodString;
        value: z.ZodString;
        errors: z.ZodArray<z.ZodUnknown, "many">;
        begin: z.ZodNumber;
        end: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }>, "many">;
    typeGroup: z.ZodString;
    idProperty: z.ZodOptional<z.ZodObject<{
        pred: z.ZodString;
        value: z.ZodString;
        errors: z.ZodArray<z.ZodUnknown, "many">;
        begin: z.ZodNumber;
        end: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }>>;
    errors: z.ZodArray<z.ZodObject<{
        ownerSet: z.ZodObject<{
            SPORE: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            SPORE: boolean;
        }, {
            SPORE: boolean;
        }>;
        errorType: z.ZodString;
        args: z.ZodArray<z.ZodString, "many">;
        begin: z.ZodNumber;
        end: z.ZodNumber;
        isSevere: z.ZodBoolean;
        errorID: z.ZodNumber;
        ownerToSeverity: z.ZodObject<{
            SPORE: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            SPORE: string;
        }, {
            SPORE: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }, {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }>, "many">;
    properties: z.ZodArray<z.ZodObject<{
        pred: z.ZodString;
        value: z.ZodString;
        errors: z.ZodArray<z.ZodUnknown, "many">;
        begin: z.ZodNumber;
        end: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }, {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    }>, "many">;
    nodeProperties: z.ZodArray<z.ZodType<NodeProperties, z.ZodTypeDef, NodeProperties>, "many">;
    numErrors: z.ZodNumber;
    numWarnings: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    errors: {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }[];
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
    idProperty?: {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    } | undefined;
}, {
    errors: {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }[];
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
    idProperty?: {
        pred: string;
        value: string;
        errors: unknown[];
        begin: number;
        end: number;
    } | undefined;
}>;
type Node = z.infer<typeof nodeSchema>;
export declare const validationResultSchema: z.ZodObject<{
    fetchError: z.ZodOptional<z.ZodEnum<["OTHER", "NOT_FOUND"]>>;
    url: z.ZodOptional<z.ZodString>;
    isRendered: z.ZodBoolean;
    numObjects: z.ZodNumber;
    tripleGroups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ownerSet: z.ZodUnknown;
        nodes: z.ZodArray<z.ZodObject<{
            types: z.ZodArray<z.ZodObject<{
                pred: z.ZodString;
                value: z.ZodString;
                errors: z.ZodArray<z.ZodUnknown, "many">;
                begin: z.ZodNumber;
                end: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }>, "many">;
            typeGroup: z.ZodString;
            idProperty: z.ZodOptional<z.ZodObject<{
                pred: z.ZodString;
                value: z.ZodString;
                errors: z.ZodArray<z.ZodUnknown, "many">;
                begin: z.ZodNumber;
                end: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }>>;
            errors: z.ZodArray<z.ZodObject<{
                ownerSet: z.ZodObject<{
                    SPORE: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    SPORE: boolean;
                }, {
                    SPORE: boolean;
                }>;
                errorType: z.ZodString;
                args: z.ZodArray<z.ZodString, "many">;
                begin: z.ZodNumber;
                end: z.ZodNumber;
                isSevere: z.ZodBoolean;
                errorID: z.ZodNumber;
                ownerToSeverity: z.ZodObject<{
                    SPORE: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    SPORE: string;
                }, {
                    SPORE: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }, {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }>, "many">;
            properties: z.ZodArray<z.ZodObject<{
                pred: z.ZodString;
                value: z.ZodString;
                errors: z.ZodArray<z.ZodUnknown, "many">;
                begin: z.ZodNumber;
                end: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }, {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            }>, "many">;
            nodeProperties: z.ZodArray<z.ZodType<NodeProperties, z.ZodTypeDef, NodeProperties>, "many">;
            numErrors: z.ZodNumber;
            numWarnings: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }, {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }>, "many">;
        numNodesWithError: z.ZodNumber;
        numNodesWithWarning: z.ZodNumber;
        numErrors: z.ZodNumber;
        numWarnings: z.ZodNumber;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        numErrors: number;
        numWarnings: number;
        nodes: {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }[];
        numNodesWithError: number;
        numNodesWithWarning: number;
        ownerSet?: unknown;
    }, {
        type: string;
        numErrors: number;
        numWarnings: number;
        nodes: {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }[];
        numNodesWithError: number;
        numNodesWithWarning: number;
        ownerSet?: unknown;
    }>, "many">>;
    html: z.ZodOptional<z.ZodString>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ownerSet: z.ZodObject<{
            SPORE: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            SPORE: boolean;
        }, {
            SPORE: boolean;
        }>;
        errorType: z.ZodString;
        args: z.ZodArray<z.ZodString, "many">;
        begin: z.ZodNumber;
        end: z.ZodNumber;
        isSevere: z.ZodBoolean;
        errorID: z.ZodNumber;
        ownerToSeverity: z.ZodObject<{
            SPORE: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            SPORE: string;
        }, {
            SPORE: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }, {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }>, "many">>;
    totalNumErrors: z.ZodNumber;
    totalNumWarnings: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    isRendered: boolean;
    numObjects: number;
    totalNumErrors: number;
    totalNumWarnings: number;
    fetchError?: "OTHER" | "NOT_FOUND" | undefined;
    url?: string | undefined;
    tripleGroups?: {
        type: string;
        numErrors: number;
        numWarnings: number;
        nodes: {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }[];
        numNodesWithError: number;
        numNodesWithWarning: number;
        ownerSet?: unknown;
    }[] | undefined;
    html?: string | undefined;
    errors?: {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }[] | undefined;
}, {
    isRendered: boolean;
    numObjects: number;
    totalNumErrors: number;
    totalNumWarnings: number;
    fetchError?: "OTHER" | "NOT_FOUND" | undefined;
    url?: string | undefined;
    tripleGroups?: {
        type: string;
        numErrors: number;
        numWarnings: number;
        nodes: {
            errors: {
                begin: number;
                end: number;
                ownerSet: {
                    SPORE: boolean;
                };
                errorType: string;
                args: string[];
                isSevere: boolean;
                errorID: number;
                ownerToSeverity: {
                    SPORE: string;
                };
            }[];
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
            idProperty?: {
                pred: string;
                value: string;
                errors: unknown[];
                begin: number;
                end: number;
            } | undefined;
        }[];
        numNodesWithError: number;
        numNodesWithWarning: number;
        ownerSet?: unknown;
    }[] | undefined;
    html?: string | undefined;
    errors?: {
        begin: number;
        end: number;
        ownerSet: {
            SPORE: boolean;
        };
        errorType: string;
        args: string[];
        isSevere: boolean;
        errorID: number;
        ownerToSeverity: {
            SPORE: string;
        };
    }[] | undefined;
}>;
export type ValidationResultRaw = z.infer<typeof validationResultSchema>;
export type ValidationResult = Omit<{
    [K in keyof ValidationResultRaw]-?: K extends "tripleGroups" | "html" | "url" | "errors" ? ValidationResultRaw[K] : ValidationResultRaw[K];
}, "fetchError">;
export interface ProcessedValidationResult {
    success: boolean;
    resultText: string;
}
export interface Result {
    url: string;
    processedValidationResult: ProcessedValidationResult;
}
export {};
