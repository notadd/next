import "reflect-metadata";
import { Component } from "@nestjs/common";
import { InjectionService } from "./injection.service";
import { Module } from "@notadd/core/injectors/module.injector";
import { SettingService } from "@notadd/setting/services/setting.service";
import { InjectionType } from "../../../packages/core/constants/injection.constants";

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
            .filter((instance: Function) => {
                const injectionType = Reflect.getMetadata("__injection_type__", instance);

                return injectionType === InjectionType.Module;
            })
            .map((instance: Function) => {
                return {
                };
            });
        this.initialized = true;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    public async disableModule(identification: string): Promise<Module> {
        const module: Module = this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    public async enableModule(identification: string): Promise<Module> {
        const module: Module = await this.getModule(identification);
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
     * @returns { Promise<Module> }
     */
    public async installModule(identification: string): Promise<Module> {
        const module: Module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    public async uninstallModule(identification: string): Promise<Module> {
        const module: Module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }

        return module;
    }
}
