"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("../resolvers");
const services_1 = require("../services");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const common_1 = require("@nestjs/common");
let InternationalizationModule = class InternationalizationModule {
    constructor(internationalizationExplorerService, internationalizationService) {
        this.internationalizationExplorerService = internationalizationExplorerService;
        this.internationalizationService = internationalizationService;
    }
    onModuleInit() {
        this.internationalizationService.initialize(this.internationalizationExplorerService.explore());
    }
};
InternationalizationModule = __decorate([
    common_1.Module({
        components: [
            services_1.InternationalizationExplorerService,
            resolvers_1.InternationalizationResolvers,
            services_1.InternationalizationService,
            metadata_scanner_1.MetadataScanner,
        ],
    }),
    __metadata("design:paramtypes", [services_1.InternationalizationExplorerService,
        services_1.InternationalizationService])
], InternationalizationModule);
exports.InternationalizationModule = InternationalizationModule;

//# sourceMappingURL=internationalization.module.js.map
