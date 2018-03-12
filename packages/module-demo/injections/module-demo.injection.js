"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_decorator_1 = require("@notadd/injection/decorators/module.decorator");
const common_1 = require("@nestjs/common");
let ModuleDemoInjection = class ModuleDemoInjection {
    constructor() {
        this.logger = new common_1.Logger("AddonLoader");
    }
    onModuleInit() {
        this.logger.log("Module demo initialized");
    }
};
ModuleDemoInjection = __decorate([
    module_decorator_1.Module({
        authors: [
            {
                email: "admin@notadd.com",
                username: "notadd",
            },
        ],
        identification: "module-demo",
        name: "Module Demo",
        version: "2.0.0",
    })
], ModuleDemoInjection);
exports.ModuleDemoInjection = ModuleDemoInjection;
