"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
const common_1 = require("@nestjs/common");
let InjectionService = class InjectionService {
    constructor() {
        this.injections = [];
    }
    loadInjections() {
        if (this.injections.length === 0) {
            this.injections = utilities_1.importInjectionsFromDirectories([
                "**/*.injection.js",
            ]);
        }
        return this.injections;
    }
    refreshInjections() {
        this.injections = [];
        this.loadInjections();
    }
};
InjectionService = __decorate([
    common_1.Injectable()
], InjectionService);
exports.InjectionService = InjectionService;

//# sourceMappingURL=injection.service.js.map
