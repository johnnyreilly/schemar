export * from "./validationResult.js"; // not sure if this is useful

/**
 * The entrypoint for the action.
 */
import { run } from "./main.js";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
run();
