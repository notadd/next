import { DASHBOARD_NAME_METADATA } from "../constants";
import { DashboardMetadata } from "../interfaces";
import { flattenDeep } from "lodash";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { Injectable } from "@nestjs/common";
import { Injectable as InjectableInterface } from "@nestjs/common/interfaces";

@Injectable()
export class DashboardExplorerService {
    private metadata = DASHBOARD_NAME_METADATA;

    /**
     * @param { ModulesContainer } modulesContainer
     * @param { MetadataScanner } metadataScanner
     */
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
    ) {
    }

    /**
     * @returns { any }
     */
    public explore() {
        const components = [ ...this.modulesContainer.values() ].map(module => module.components);

        return this.flatMap(components, instance => this.filterDashboards(instance));
    }

    /**
     * @param instance
     * @param prototype
     * @param { string } methodName
     * @returns { DashboardMetadata }
     */
    protected extractMetadata(instance, prototype, methodName: string): DashboardMetadata {
        const callback = prototype[ methodName ];

        return {
            name: Reflect.getMetadata(this.metadata, callback),
            methodName,
        };
    }

    /**
     * @param { Injectable } instance
     * @returns { Array<DashboardMetadata> }
     */
    protected filterDashboards(instance: InjectableInterface): Array<DashboardMetadata> {
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
                const callback = instance[ dashboard.methodName ].bind(instance);

                return {
                    callback,
                    ...dashboard,
                };
            });
    }

    /**
     * @param { Map<any, any>[] } components
     * @param { (instance: any) => Array<DashboardMetadata> } callback
     * @returns { any }
     */
    protected flatMap(components: Array<Map<any, any>>, callback: (instance: any) => Array<DashboardMetadata>) {
        return flattenDeep(
            components.map(component =>
                [ ...component.values() ].map(({ instance }) => callback(instance)),
            ),
        );
    }
}
