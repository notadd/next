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
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const injector_1 = require("@nestjs/core/injector");
const setting_service_1 = require("@notadd/setting/services/setting.service");
let WorkflowExplorerService = class WorkflowExplorerService {
    constructor(modulesContainer, metadataScanner, settingService) {
        this.modulesContainer = modulesContainer;
        this.metadataScanner = metadataScanner;
        this.settingService = settingService;
        this.category = "category";
        this.identification = "identification";
    }
    explore() {
        const components = [
            ...this.modulesContainer.values(),
        ].map(module => module.components);
        return lodash_1.flattenDeep(components.map(component => [
            ...component.values(),
        ]
            .map(({ instance, metatype }) => this.filterWorkflows(instance, metatype))));
    }
    filterWorkflows(instance, metatype) {
        const isWorkflow = Reflect.getMetadata(constants_1.IS_WORKFLOW, metatype);
        const workflowMeta = {
            category: Reflect.getMetadata(this.category, metatype),
            identification: Reflect.getMetadata(this.identification, metatype),
        };
        if (isWorkflow && workflowMeta.identification) {
            workflowMeta.target = instance;
            return [
                workflowMeta,
            ];
        }
        else {
            return [];
        }
    }
};
WorkflowExplorerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [injector_1.ModulesContainer,
        metadata_scanner_1.MetadataScanner,
        setting_service_1.SettingService])
], WorkflowExplorerService);
exports.WorkflowExplorerService = WorkflowExplorerService;

//# sourceMappingURL=workflow-explorer.service.js.map
