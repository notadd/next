"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
exports.SystemPlatformInformation = {
    provide: "system-platform",
    useFactory: () => {
        return os_1.platform();
    },
};
