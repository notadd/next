import { fork } from "child_process";
import { join } from "path";

export class ClusterStarter {
    protected bootstrap = join(
        process.cwd(),
        "node_modules",
        "@notadd",
        "server",
        "bootstrap.js",
    );

    protected child: any;

    protected pid: number;

    public initialize() {
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

    public start() {
        this.child = fork(this.bootstrap, [
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

    protected message(message: { action: string }) {
        console.log("Received Message: " + JSON.stringify(message));
        console.log(message.action);
        switch (message.action) {
            case "restart":
                console.log("restarting...");
                this.child = undefined;
                process.kill(this.pid);
                Cluster.start();
                break;
        }
    }
}

export const Cluster = new ClusterStarter();

Cluster.initialize();
Cluster.start();
