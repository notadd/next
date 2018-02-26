import {Component} from "@nestjs/common";
import {Information} from "@notadd/core/decorators/information.decorator";
import {platform, release} from "os";

@Component()
export class SystemInformation {
    @Information("node-version")
    public nodeVersion(): string {
        return process.version as string;
    }

    @Information("system-platform")
    public systemPlatform(): string {
        return platform();
    }

    @Information("system-release")
    public systemRelease(): string {
        return release();
    }
}
