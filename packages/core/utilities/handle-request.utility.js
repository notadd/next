"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ready_utility_1 = require("./ready.utility");
const HASH_REGEXP = /[0-9a-f]{10,}/;
function handleRequest(context, filename, processRequest, req) {
    if (context.options.lazy && (!context.options.filename || context.options.filename.test(filename))) {
        context.rebuild();
    }
    if (HASH_REGEXP.test(filename)) {
        try {
            if (context.fs.statSync(filename).isFile()) {
                processRequest();
                return;
            }
        }
        catch (e) {
        }
    }
    ready_utility_1.ready(context, processRequest, req);
}
exports.handleRequest = handleRequest;
