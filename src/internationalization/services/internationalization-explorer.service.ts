import { Injectable } from "@nestjs/common";
import { Injectable as InjectableInterface } from "@nestjs/common/interfaces";
import { flattenDeep } from "lodash";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PhraseMetadata } from "../metadatas";
import { PHRASE_DEFINITION } from "../constants";

@Injectable()
export class InternationalizationExplorerService {
    private metadata = PHRASE_DEFINITION;

    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
    ) {
    }

    public explore(): Array<PhraseMetadata> {
        const components = [ ...this.modulesContainer.values() ].map(module => module.components);

        return this.flatMap(components, instance => this.filterPhrases(instance));
    }

    /**
     * @param instance
     * @param prototype
     * @param { string } methodName
     *
     * @returns { DashboardMetadata }
     */
    protected extractMetadata(instance, prototype, methodName: string): PhraseMetadata {
        const callback = prototype[ methodName ];

        return {
            name: Reflect.getMetadata(this.metadata, callback),
            methodName,
        };
    }

    public filterPhrases(instance: InjectableInterface): Array<PhraseMetadata> {
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
     * @param { (instance: any) => Array<PhraseMetadata> } callback
     * @returns { any }
     */
    protected flatMap(components: Array<Map<any, any>>, callback: (instance: any) => Array<PhraseMetadata>) {
        return flattenDeep<PhraseMetadata>(
            components.map(component =>
                [ ...component.values() ].map(({ instance }) => callback(instance)),
            ),
        );
    }
}
