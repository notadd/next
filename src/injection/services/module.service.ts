import "reflect-metadata";
import { Component } from "@nestjs/common";
import { InjectionService } from "./injection.service";
import { Injection } from "../types/injection.type";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Module } from "../types/module.type";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ModuleService {
    private initialized: boolean = false;

    private modules: Array<Module> = [];

    constructor(
        private readonly injectionService: InjectionService,
        private readonly settingService: SettingService,
    ) {
        this.injectionService
            .loadInjections()
            .filter((injection: Injection) => {
                return InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .forEach(async(injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);

                this.modules.push({
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: await this.settingService.get(`module.${identification}.enabled`, false),
                    identification: identification,
                    installed: await this.settingService.get(`module.${identification}.installed`, false),
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
     * @returns { Promise<Module | undefined> }
     */
    public async disableModule(identification: string): Promise<Result | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get<boolean>(`module.${module.identification}.enabled`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "0");

        return {
            message: `Disable module [${module.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async enableModule(identification: string): Promise<Result | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get<boolean>(`module.${module.identification}.enabled`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "1");

        return {
            message: `Enable module [${module.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async getModule(identification: string): Promise<Module | undefined> {
        return this.modules.find((module: Module) => {
            return module.identification === identification;
        });
    }

    /**
     * @param filter
     *
     * @returns { Promise<Array<Module>> }
     */
    public async getModules(filter: { installed?: boolean, enabled?: boolean }): Promise<Array<Module>> {
        console.log(typeof filter);
        if (filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.modules.filter(module => {
                    return module.installed == true;
                });
            } else {
                return this.modules.filter(module => {
                    return !module.installed;
                });
            }
        } else if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.modules.filter(module => {
                    return module.installed == true && module.enabled == true;
                });
            } else {
                return this.modules.filter(module => {
                    return module.installed == true &&!module.enabled;
                });
            }
        } else {
            return this.modules;
        }
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async installModule(identification: string): Promise<Result | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (await this.settingService.get<boolean>(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] has been installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.installed`, "1");

        return {
            message: `Install module [${module.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async uninstallModule(identification: string): Promise<Result | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get<boolean>(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.installed`, "0");

        return {
            message: `Uninstall module [${module.identification}] successfully!`,
        };
    }
}
