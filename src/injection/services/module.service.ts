import "reflect-metadata";
import { Component } from "@nestjs/common";
import { InjectionService } from "./injection.service";
import { Injection } from "../types/injection.type";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Module } from "../types/module.type";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ModuleService {
    private initialized: boolean = false;

    private modules: Array<Module> = [];

    constructor(
        private readonly injectionService: InjectionService,
        private readonly settingService: SettingService,
    ) {
        this.modules = this.injectionService
            .loadInjections()
            .filter((injection: Injection) => {
                return InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .map((injection: Injection) => {
                return {
                    authors: Reflect.getMetadata("authors", injection.target),
                    identification: Reflect.getMetadata("identification", injection.target),
                    location: injection.location,
                    version: Reflect.getMetadata("version", injection.target),
                };
            });
        this.initialized = true;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async disableModule(identification: string): Promise<Module | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async enableModule(identification: string): Promise<Module | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
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
     * @param { Object } filter
     *
     * @returns { Promise<Array<Module>> }
     */
    public async getModules(filter: object): Promise<Array<Module>> {
        return this.modules;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async installModule(identification: string): Promise<Module | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    public async uninstallModule(identification: string): Promise<Module | undefined> {
        const module: Module | undefined = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }
}
