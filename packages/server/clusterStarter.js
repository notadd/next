"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
class Cluster {
    constructor() {
        this.bootstrap = path_1.join(process.cwd(), "node_modules", "@notadd", "server", "bootstrap.js");
    }
    initialize() {
        process.on("message", this.message);
    }
    start() {
        this.initialize();
        const child = child_process_1.fork(this.bootstrap);
        this.pid = child.pid;
        console.log("Start server on pid: " + this.pid);
    }
    message(message) {
        console.log("Received Message: " + JSON.stringify(message));
    }
}
exports.Cluster = Cluster;

//# sourceMappingURL=clusterStarter.js.map
