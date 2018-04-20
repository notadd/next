"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
class ClusterStarter {
    constructor() {
        this.bootstrap = path_1.join(process.cwd(), "node_modules", "@notadd", "server", "bootstrap.js");
    }
    initialize() {
        process.on("SIGINT", () => {
            console.log("Received Message: SIGINT.");
            this.child.kill();
            process.exit(0);
        });
        process.on("SIGTERM", () => {
            console.log("Received Message: SIGTERM.");
            this.child.kill("SIGTERM");
            process.exit(0);
        });
    }
    start() {
        this.child = child_process_1.fork(this.bootstrap, [
            "--no-daemon",
            "--no-silent",
        ], {
            env: process.env,
            cwd: process.cwd(),
            stdio: [
                process.stdin,
                process.stdout,
                process.stderr,
                "ipc",
            ],
        });
        this.pid = this.child.pid;
        console.log("Start server on pid: " + this.pid);
        this.child.on("message", this.message);
    }
    message(message) {
        console.log("Received Message: " + JSON.stringify(message));
        console.log(message.action);
        switch (message.action) {
            case "restart":
                console.log("restarting...");
                this.child = undefined;
                process.kill(this.pid);
                exports.Cluster.start();
                break;
        }
    }
}
exports.ClusterStarter = ClusterStarter;
exports.Cluster = new ClusterStarter();
exports.Cluster.initialize();
exports.Cluster.start();

//# sourceMappingURL=cluster.js.map
