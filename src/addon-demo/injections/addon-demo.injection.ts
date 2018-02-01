import { AddonDemoModule } from "../modules/addon-demo.module";

import { InjectionType } from "@notadd/core/constants/injection.constants";

export class AddonDemoInjection {
    static module = AddonDemoModule;
    static type = InjectionType.Extension;
}
