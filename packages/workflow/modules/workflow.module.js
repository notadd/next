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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const services_1 = require("../services");
const services_2 = require("../services");
let WorkflowModule = class WorkflowModule {
    constructor(workflowExplorerService, workflowService) {
        this.workflowExplorerService = workflowExplorerService;
        this.workflowService = workflowService;
    }
    configure(consumer) {
        return __awaiter(this, void 0, void 0, function* () {
            this.workflowService.initialize(this.workflowExplorerService.explore());
            yield this.workflowService.start();
        });
    }
};
WorkflowModule = __decorate([
    common_1.Module({
        components: [
            metadata_scanner_1.MetadataScanner,
            services_1.WorkflowExplorerService,
            services_2.WorkflowService,
        ],
        exports: [
            services_2.WorkflowService,
        ],
        imports: [
            setting_module_1.SettingModule,
        ],
    }),
    __metadata("design:paramtypes", [services_1.WorkflowExplorerService,
        services_2.WorkflowService])
], WorkflowModule);
exports.WorkflowModule = WorkflowModule;
