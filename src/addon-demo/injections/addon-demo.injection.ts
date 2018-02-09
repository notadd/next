import { Addon } from "@notadd/injection/decorators/addon.decorator";

@Addon({
    authors: [
        {
            email: "admin@notadd.com",
            username: "notadd",
        },
    ],
    identification: "addon-demo",
    version: "v1.0.0",
})
export class AddonDemoInjection {

}
