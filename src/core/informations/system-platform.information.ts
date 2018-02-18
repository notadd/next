import { platform } from "os";

export const SystemPlatformInformation = {
    provide: "system-platform",
    useFactory: () => {
        return platform();
    },
};
