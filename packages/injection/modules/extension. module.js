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
const import_classes_from_directories_1 = require("../utilities/import.classes.from.directories");
let ExtensionModule = class ExtensionModule {
    constructor() {
        this.logger = new common_1.Logger("NotaddExtension", true);
    }
    configure(consumer) {
        this.logger.log('Begin to load extension.');
    }
};
ExtensionModule = __decorate([
    common_1.Module({
        imports: [
            ...import_classes_from_directories_1.importClassesFromDirectories(["**/*.extension.injection.js"]),
        ],
    }),
    __metadata("design:paramtypes", [])
], ExtensionModule);
exports.ExtensionModule = ExtensionModule;
