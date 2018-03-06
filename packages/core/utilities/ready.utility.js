"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ready(context, fn, req) {
    if (context.state) {
        return fn(context.webpackStats);
    }
    context.log.info(`wait until bundle finished: ${req.url || fn.name}`);
    context.callbacks.push(fn);
}
exports.ready = ready;
