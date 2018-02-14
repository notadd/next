import { Component } from "@nestjs/common";
import { Injectable } from "@nestjs/common/interfaces";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { flattenDeep, mapValues, groupBy } from 'lodash';
import { PAGE_DESCRIPTION, PAGE_FORM, PAGE_IDENTIFICATION, PAGE_NAME, PAGE_SCHEMA } from "../constants/page.constants";
import { PageMetadata } from "../metadatas/page.metadata";

@Component()
export class PageExplorerService {
    /**
     * @param { ModulesContainer } modulesContainer
     * @param { MetadataScanner } metadataScanner
     * @param { ExternalContextCreator } externalContextCreator
     */
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
        private readonly externalContextCreator: ExternalContextCreator,
    ) {
    }

    public explore() {
        const components = [
            ...this.modulesContainer.values(),
        ].map(module => module.components);

        return flattenDeep(
            components.map(component =>
                [
                    ...component.values(),
                ]
                    .map(({ instance, metatype }) => this.filterPages(instance, metatype)),
            ),
        );
    }

    protected extractMetadata(instance, prototype, methodName: string) {
        const callback = prototype[ methodName ];

        return {
            form: {
                callback: instance[methodName].bind(instance),
                name: Reflect.getMetadata(PAGE_FORM, callback),
            },
            schema: {
                callback: instance[methodName].bind(instance),
                name: Reflect.getMetadata(PAGE_SCHEMA, callback),
            },
        };
    }

    protected filterPages(instance: Injectable, metatype: any): Array<PageMetadata> {
        const pageMetadata: PageMetadata = {
            description: Reflect.getMetadata(PAGE_DESCRIPTION, metatype),
            identification: Reflect.getMetadata(PAGE_IDENTIFICATION, metatype),
            name: Reflect.getMetadata(PAGE_NAME, metatype),
        };
        if (pageMetadata.identification && pageMetadata.name) {
            const prototype = Object.getPrototypeOf(instance);
            const metadatas = this.metadataScanner.scanFromPrototype(
                instance,
                prototype,
                name => this.extractMetadata(instance, prototype, name),
            );
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
        } else {
            return [];
        }
    }
}
