import { release } from "os";

export const SystemReleaseInformation = {
    provide: "system-release",
    useFactory: () => {
        return release();
    },
};
