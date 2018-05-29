import { Injectable } from "@nestjs/common";
import { join } from "path";
import { Result } from "@notadd/core/interfaces";
import { SettingService } from "@notadd/setting/services/setting.service";

import { getPackagePathByModule } from "../utilities/get-package-path-by-module";
import { Module } from "../interfaces/module.interface";
import { ModuleLoader } from "../loaders/module.loader";
import { SchemaBuilder } from "../builders/schema.builder";

@Injectable()
export class ModuleService {
    protected loader: ModuleLoader = new ModuleLoader();

    /**
     * @param { SettingService } settingService
     */
    constructor(
        private readonly settingService: SettingService,
    ) {
        this.loader.syncWithSetting(this.settingService);
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
        await this.loader.refresh().syncWithSetting(this.settingService);

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
        await this.loader.refresh().syncWithSetting(this.settingService);

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
        return this.loader.modules.find((module: Module) => {
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
                return this.loader.modules.filter(module => {
                    return module.installed === true;
                });
            } else {
                return this.loader.modules.filter(module => {
                    return !module.installed;
                });
            }
        } else if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.loader.modules.filter(module => {
                    return module.installed === true && module.enabled === true;
                });
            } else {
                return this.loader.modules.filter(module => {
                    return module.installed === true && !module.enabled;
                });
            }
        } else {
            return this.loader.modules;
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
        await this.loader.refresh().syncWithSetting(this.settingService);

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
        await this.loader.refresh().syncWithSetting(this.settingService);

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
