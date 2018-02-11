import { Component } from "@nestjs/common";
import { DASHBOARD_NAME_METADATA } from "../constants/dashboard.constants";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";
import { flattenDeep, mapValues, groupBy } from 'lodash';
import { Injectable } from "@nestjs/common/interfaces";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";

@Component()
export class DashboardExplorerService {
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
        private readonly externalContextCreator: ExternalContextCreator,
    ) {
    }

    public explore() {
        const components = [ ...this.modulesContainer.values() ].map(module => module.components);

        return this.flatMap(components, instance => this.filterDashboards(instance));
    }

    protected extractMetadata(instance, prototype, methodName: string): DashboardMetadata {
        const callback = prototype[ methodName ];

        return {
            name: Reflect.getMetadata(DASHBOARD_NAME_METADATA, callback),
            methodName,
        }
    }

    protected filterDashboards(instance: Injectable): Array<DashboardMetadata> {
        const prototype = Object.getPrototypeOf(instance);
        const components = this.metadataScanner.scanFromPrototype(
            instance,
            prototype,
            name => this.extractMetadata(instance, prototype, name),
        );

        return components
            .filter(dashboard => {
                return dashboard.name && dashboard.methodName;
            })
            .map(dashboard => {
                const callback = instance[dashboard.methodName].bind(instance);

                return {
                    callback,
                    ...dashboard,
                };
            });
    }

    protected flatMap(components: Map<any, any>[], callback: (instance: any) => Array<DashboardMetadata>) {
        return flattenDeep(
            components.map(component =>
                [ ...component.values() ].map(({ instance }) => callback(instance)),
            ),
        );
    }
}
