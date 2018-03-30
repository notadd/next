import "reflect-metadata";
import { Component } from "@nestjs/common";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { getPackagePathByModule } from "../utilities/get-package-path-by-module";
import { InjectionService } from "./injection.service";
import { Injection, Module } from "../interfaces";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { join } from "path";
import { Result } from "@notadd/core/types/result.type";
import { SchemaBuilder } from "../builders";
import { SettingService } from "@notadd/setting/services/setting.service";
import { safeDump, safeLoad } from "js-yaml";

@Component()
export class ModuleService {
    private initialized: boolean = false;

    private modules: Array<Module> = [];

    /**
     * @param { InjectionService } injectionService
     * @param { SettingService } settingService
     */
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
        if (!await this.settingService.get<boolean>(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "0");
        this.loadInjections(true);

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
        if (!await this.settingService.get<boolean>(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "1");
        this.loadInjections(true);

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
        await this.syncSchema(module);
        await this.settingService.setSetting(`module.${module.identification}.installed`, "1");
        this.loadInjections(true);

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
        // await this.dropSchema(module);
        await this.settingService.setSetting(`module.${module.identification}.installed`, "0");
        this.loadInjections(true);

        return {
            message: `Uninstall module [${module.identification}] successfully!`,
        };
    }

    /**
     * @param { Module } module
     *
     * @returns { Promise<void> }
     */
    protected async dropSchema(module: Module): Promise<void> {
        const path = getPackagePathByModule(module);

        if (path.length) {
            const builder = new SchemaBuilder();
            builder.buildMetadatas([
                join(path, "*/*.entity.js"),
                join(path, "**/*.entity.js"),
            ]);
            await builder.drop();
        }
    }

    protected loadEnabledAddons() {
        const path = join(process.cwd(), "storages", "modules", "enabled.yaml");
        let exits: Array<string> = [];
        if (existsSync(path)) {
            exits = safeLoad(readFileSync(path).toString()) as Array<string>;
            if (!exits) {
                exits = [];
            }
        }
        const enabled = this.modules.filter((module: Module) => {
            return module.enabled === true;
        }).map((module: Module) => {
            return module.location;
        });
        if (exits.filter(data => {
                return enabled.indexOf(data) === -1;
            }).length || enabled.filter(data => {
                return exits.indexOf(data) === -1;
            }).length) {
            // writeFileSync(path, safeDump(enabled));
        }
    }

    protected async loadInjections(reload: boolean = false) {
        if (reload) {
            this.modules.splice(0, this.modules.length);
        }
        const injections = this.injectionService
            .loadInjections()
            .filter((injection: Injection) => {
                return InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
            });
        for(let i = 0; i < injections.length; i ++) {
            const injection = injections[i];
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
        }
        this.loadEnabledAddons();
        this.initialized = true;
    }

    /**
     * @param { Module } module
     *
     * @returns { Promise<void> }
     */
    protected async syncSchema(module: Module): Promise<void> {
        const path = getPackagePathByModule(module);

        if (path.length) {
            const builder = new SchemaBuilder();
            builder.buildMetadatas([
                join(path, "*/*.entity.js"),
                join(path, "**/*.entity.js"),
            ]);
            await builder.sync();
        }
    }
}
