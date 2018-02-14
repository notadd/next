import "reflect-metadata";
import { Component } from "@nestjs/common";
import { async } from "rxjs/scheduler/async";
import { Extension } from "../types/extension.type";
import { Injection } from "../types/injection.type";
import { InjectionService } from "./injection.service";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ExtensionService {
    private initialized: boolean = false;

    private extensions: Array<Extension> = [];

    constructor(
        private readonly injectionService: InjectionService,
        private readonly settingService: SettingService,
    ) {
        this.injectionService
            .loadInjections()
            .filter((injection: Injection) => {
                return InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .forEach(async(injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);
                this.extensions.push({
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: await this.settingService.get(`extension.${identification}.enabeld`, false),
                    identification: identification,
                    installed: await this.settingService.get(`extension.${identification}.installed`, false),
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    version: Reflect.getMetadata("version", injection.target),
                });
            });
        this.initialized = true;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    public async disableExtension(identification: string): Promise<Result | undefined> {
        const extension: Extension | undefined = await this.getExtension(identification);
        if (!extension) {
            throw new Error("Extension do not exists!");
        }
        if (!await this.settingService.get<boolean>(`extension.${extension.identification}.enabled`, false)) {
            throw new Error(`Extension [${extension.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`extension.${extension.identification}.enabled`, "0");

        return {
            message: `Disable extension [${extension.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    public async enableExtension(identification: string): Promise<Result | undefined> {
        const extension: Extension | undefined = await this.getExtension(identification);
        if (!extension) {
            throw new Error("Extension do not exists!");
        }
        if (!await this.settingService.get<boolean>(`extension.${extension.identification}.enabled`, false)) {
            throw new Error(`Extension [${extension.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`extension.${extension.identification}.enabled`, "1");

        return {
            message: `Enable extension [${extension.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    public async getExtension(identification: string): Promise<Extension | undefined> {
        return this.extensions.find((extension: Extension) => {
            return extension.identification === identification;
        });
    }

    /**
     * @param { Object } filter
     *
     * @returns { Promise<Array<Extension>> }
     */
    public async getExtensions(filter: { enabled?:boolean, installed?: boolean }): Promise<Array<Extension>> {
        if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.extensions.filter(extension => {
                    return extension.enabled === true;
                });
            } else {
                return this.extensions.filter(extension => {
                    return !extension.enabled;
                });
            }
        } else if(filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.extensions.filter(extension => {
                    return extension.installed === true;
                });
            } else {
                return this.extensions.filter(extension => {
                    return !extension.installed;
                });
            }
        } else {
            return this.extensions;
        }
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    public async installExtension(identification: string): Promise<Result | undefined> {
        const extension: Extension | undefined = await this.getExtension(identification);
        if (!extension) {
            throw new Error("Extension do not exists!");
        }
        if (await this.settingService.get<boolean>(`extension.${extension.identification}.installed`, false)) {
            throw new Error(`Extension [${extension.identification}] has been installed!`);
        }
        await this.settingService.setSetting(`extension.${extension.identification}.installed`, "1");

        return {
            message: `Install extension [${extension.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    public async uninstallExtension(identification: string): Promise<Result | undefined> {
        const extension: Extension | undefined = await this.getExtension(identification);
        if (!extension) {
            throw new Error("Extension do not exists!");
        }
        if (!await this.settingService.get<boolean>(`extension.${extension.identification}.installed`, false)) {
            throw new Error(`Extension [${extension.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`extension.${extension.identification}.installed`, "0");

        return {
            message: `Uninstall extension [${extension.identification}] successfully!`,
        };
    }
}
