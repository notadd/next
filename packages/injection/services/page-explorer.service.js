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
const injector_1 = require("@nestjs/core/injector");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
let PageExplorerService = class PageExplorerService {
    constructor(modulesContainer, metadataScanner) {
        this.modulesContainer = modulesContainer;
        this.metadataScanner = metadataScanner;
    }
    explore() {
        const components = [
            ...this.modulesContainer.values(),
        ].map(module => module.components);
        return lodash_1.flattenDeep(components.map(component => [
            ...component.values(),
        ]
            .map(({ instance, metatype }) => this.filterPages(instance, metatype))));
    }
    extractMetadata(instance, prototype, methodName) {
        const callback = prototype[methodName];
        return {
            form: {
                callback: instance[methodName].bind(instance),
                name: Reflect.getMetadata(constants_1.PAGE_FORM, callback),
            },
            schema: {
                callback: instance[methodName].bind(instance),
                name: Reflect.getMetadata(constants_1.PAGE_SCHEMA, callback),
            },
        };
    }
    filterPages(instance, metatype) {
        const pageMetadata = {
            description: Reflect.getMetadata(constants_1.PAGE_DESCRIPTION, metatype),
            identification: Reflect.getMetadata(constants_1.PAGE_IDENTIFICATION, metatype),
            name: Reflect.getMetadata(constants_1.PAGE_NAME, metatype),
        };
        if (pageMetadata.identification && pageMetadata.name) {
            const prototype = Object.getPrototypeOf(instance);
            const metadatas = this.metadataScanner.scanFromPrototype(instance, prototype, name => this.extractMetadata(instance, prototype, name));
            metadatas.filter(metadata => {
                return metadata.form.name || metadata.schema.name;
            }).map(instance => {
                if (instance.form.name) {
                    pageMetadata.form = instance.form;
                }
                if (instance.schema.name) {
                    pageMetadata.schema = instance.schema;
                }
            });
            return [
                pageMetadata,
            ];
        }
        else {
            return [];
        }
    }
};
PageExplorerService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injector_1.ModulesContainer,
        metadata_scanner_1.MetadataScanner])
], PageExplorerService);
exports.PageExplorerService = PageExplorerService;
