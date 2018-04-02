import { Extension as ExtensionInterface, Injection } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";
import { ExtensionCache } from "../interfaces";

export class ExtensionLoader extends InjectionLoader {
    protected cacheForExtensions: Array<ExtensionInterface> = [];

    protected filePathForCache = `${process.cwd()}/storages/caches/extension.json`;

    public get extensions(): Array<ExtensionInterface> {
        if (!this.cacheForExtensions.length) {
            this.loadExtensionsFromCache();
        }

        return this.cacheForExtensions;
    }

    constructor() {
        super();
        this.loadExtensionsFromCache();
    }

    public loadCachesFromJson(): ExtensionCache {
        return this.loadCachesFromJsonFile<ExtensionCache>(this.filePathForCache);
    }

    public refresh() {
        this.cacheForExtensions.splice(0, this.cacheForExtensions.length);

        return this;
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.cacheForExtensions.length) {
            this.loadExtensionsFromCache();
        }
        for(let i = 0; i < this.cacheForExtensions.length; i ++) {
            const extension = this.cacheForExtensions[i];
            const identification = extension.identification;
            extension.enabled = await setting.get(`extension.${identification}.enabled`, false);
            extension.installed = await setting.get(`extension.${identification}.installed`, false);
            this.cacheForExtensions.splice(i, 1, extension);
        }

        this.syncCachesToFile();

        return this;
    }

    protected loadExtensionsFromCache() {
        this.cacheForExtensions.splice(0, this.cacheForExtensions.length);
        this.cacheForExtensions = this
            .injections
            .filter((injection: Injection) => {
                return InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
            }).map((injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);
                return {
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: false,
                    identification: identification,
                    installed: false,
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    shell: Reflect.getMetadata("shell", injection.target),
                    target: injection.target,
                    version: Reflect.getMetadata("version", injection.target),
                }
            });
    }

    protected syncCachesToFile() {
        const caches = this.loadCachesFromJson();
        const exists: Array<string> = caches.enabled ? caches.enabled : [];
        const locations = this.extensions.filter((extension: ExtensionInterface) => {
            return extension.enabled === true;
        }).map((extension: ExtensionInterface) => {
            return extension.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;
            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}

export const Extension = new ExtensionLoader();
