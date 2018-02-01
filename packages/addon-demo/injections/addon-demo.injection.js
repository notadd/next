"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_demo_module_1 = require("../modules/addon-demo.module");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
class AddonDemoInjection {
}
AddonDemoInjection.module = addon_demo_module_1.AddonDemoModule;
AddonDemoInjection.type = injection_constants_1.InjectionType.Extension;
exports.AddonDemoInjection = AddonDemoInjection;
