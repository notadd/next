"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
exports.SystemReleaseInformation = {
    provide: "system-release",
    useFactory: () => {
        return os_1.release();
    },
};
