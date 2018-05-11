import { Information } from "@notadd/core/decorators/information.decorator";
import { Injectable } from "@nestjs/common";
import { platform, release } from "os";

@Injectable()
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
