"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_version_information_1 = require("./node-version.information");
const system_platform_information_1 = require("./system-platform.information");
const system_release_information_1 = require("./system-release.information");
exports.Informations = [
    node_version_information_1.NodeVersionInformation,
    system_platform_information_1.SystemPlatformInformation,
    system_release_information_1.SystemReleaseInformation,
];
