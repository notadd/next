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
const injector_1 = require("@nestjs/core/injector");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const constants_1 = require("../constants");
let InternationalizationExplorerService = class InternationalizationExplorerService {
    constructor(modulesContainer, metadataScanner) {
        this.modulesContainer = modulesContainer;
        this.metadataScanner = metadataScanner;
        this.metadata = constants_1.PHRASE_DEFINITION;
    }
    explore() {
        const components = [...this.modulesContainer.values()].map(module => module.components);
        return this.flatMap(components, instance => this.filterPhrases(instance));
    }
    extractMetadata(instance, prototype, methodName) {
        const callback = prototype[methodName];
        return {
            name: Reflect.getMetadata(this.metadata, callback),
            methodName,
        };
    }
    filterPhrases(instance) {
        const prototype = Object.getPrototypeOf(instance);
        const components = this.metadataScanner.scanFromPrototype(instance, prototype, name => this.extractMetadata(instance, prototype, name));
        return components
            .filter(dashboard => {
            return dashboard.name && dashboard.methodName;
        })
            .map(dashboard => {
            const callback = instance[dashboard.methodName].bind(instance);
            return Object.assign({ callback }, dashboard);
        });
    }
    flatMap(components, callback) {
        return lodash_1.flattenDeep(components.map(component => [...component.values()].map(({ instance }) => callback(instance))));
    }
};
InternationalizationExplorerService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injector_1.ModulesContainer,
        metadata_scanner_1.MetadataScanner])
], InternationalizationExplorerService);
exports.InternationalizationExplorerService = InternationalizationExplorerService;
