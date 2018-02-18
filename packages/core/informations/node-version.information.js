"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeVersionInformation = {
    provide: "node-version",
    useFactory: () => {
        return process.version;
    },
};
