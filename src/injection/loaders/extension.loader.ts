import { Extension as ExtensionInterface, Injection } from "../interfaces";
import { Injection as InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class ExtensionLoader {
    protected caches: Array<ExtensionInterface> = [];

    protected filePathForEnabledCache = `${process.cwd()}/storages/extensions/enabled.json`;

    public get extensions(): Array<ExtensionInterface> {
        if (!this.caches.length) {
            this.loadCaches();
        }

        return this.caches;
    }

    constructor() {
        this.loadCaches();
    }

    public refresh() {
        this.caches.splice(0, this.caches.length);
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.caches.length) {
            this.loadCaches();
        }
        for(let i = 0; i < this.caches.length; i ++) {
            const extension = this.caches[i];
            const identification = extension.identification;
            extension.enabled = await setting.get(`extension.${identification}.enabled`, false);
            extension.installed = await setting.get(`extension.${identification}.installed`, false);
            this.caches.splice(i, 1, extension);
        }

        return this;
    }

    protected loadCaches() {
        this.caches = InjectionLoader
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
                    version: Reflect.getMetadata("version", injection.target),
                }
            });
    }
}

export const Extension = new ExtensionLoader();
