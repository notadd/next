import { Addon } from "@notadd/injection/decorators/addon.decorator";

@Addon({
    authors: [
        {
            email: "admin@notadd.com",
            username: "notadd",
        },
    ],
    identification: "addon-demo",
    name: "Addon Demo",
    version: "v1.0.0",
})
export class AddonDemoInjection {
}
