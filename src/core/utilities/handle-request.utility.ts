import { ready } from "./ready.utility";

const HASH_REGEXP = /[0-9a-f]{10,}/;

export function handleRequest(context, filename, processRequest, req) {
    if (context.options.lazy && (!context.options.filename || context.options.filename.test(filename))) {
        context.rebuild();
    }
    if (HASH_REGEXP.test(filename)) {
        try {
            if (context.fs.statSync(filename).isFile()) {
                processRequest();

                return;
            }
        } catch (e) {
        }
    }
    ready(context, processRequest, req);
}
