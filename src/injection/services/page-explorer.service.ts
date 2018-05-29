import { Injectable } from "@nestjs/common";
import { flattenDeep } from "lodash";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { Injectable as InjectableInterface } from "@nestjs/common/interfaces";

import { PAGE_DESCRIPTION, PAGE_FORM, PAGE_IDENTIFICATION, PAGE_NAME, PAGE_SCHEMA } from "../constants/page.constants";
import { PageMetadata } from "../metadatas/page.metadata";

@Injectable()
export class PageExplorerService {
    /**
     * @param { ModulesContainer } modulesContainer
     * @param { MetadataScanner } metadataScanner
     */
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
    ) {
    }

    public explore(): Array<PageMetadata> {
        const components = [
            ...this.modulesContainer.values(),
        ].map(module => module.components);

        return flattenDeep<PageMetadata>(
            components.map(component =>
                [
                    ...component.values(),
                ]
                    .map(({ instance, metatype }) => this.filterPages(instance, metatype)),
            ),
        );
    }

    /**
     * @param instance
     * @param prototype
     * @param { string } methodName
     * @returns { any }
     */
    protected extractMetadata(instance, prototype, methodName: string) {
        const callback = prototype[ methodName ];

        return {
            form: {
                callback: instance[ methodName ].bind(instance),
                name: Reflect.getMetadata(PAGE_FORM, callback),
            },
            schema: {
                callback: instance[ methodName ].bind(instance),
                name: Reflect.getMetadata(PAGE_SCHEMA, callback),
            },
        };
    }

    /**
     * @param { InjectableInterface } instance
     * @param metatype
     * @returns { Array<PageMetadata> }
     */
    protected filterPages(instance: InjectableInterface, metatype: any): Array<PageMetadata> {
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
