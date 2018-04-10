import { Addon } from "../interfaces";
import { AddonLoader } from "../loaders";
import { Component } from "@nestjs/common";
import { getPackagePathByAddon } from "../utilities/get-package-path-by-addon";
import { join } from "path";
import { Result } from "@notadd/core/types/result.type";
import { SchemaBuilder } from "../builders";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class AddonService {
    protected loader: AddonLoader = new AddonLoader();

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
     * @returns { Promise<Addon | undefined> }
     */
    public async disableAddon(identification: string): Promise<Result | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }
        await this.settingService.setSetting(`addon.${addon.identification}.enabled`, "0");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Disable addon [${addon.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async enableAddon(identification: string): Promise<Result | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }
        if (!await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
                throw new Error(`Addon [${addon.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`addon.${addon.identification}.enabled`, "1");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Enable addon [${addon.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async getAddon(identification: string): Promise<Addon | undefined> {
        return this.loader.addons.find((addon: Addon) => {
            return addon.identification === identification;
        });
    }

    /**
     * @param filter
     *
     * @returns { Promise<Array<Addon>> }
     */
    public async getAddons(filter: { enabled?: boolean, installed?: boolean}): Promise<Array<Addon>> {
        if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.loader.addons.filter(addon => {
                    return addon.enabled === true;
                });
            } else {
                return this.loader.addons.filter(addon => {
                    return !addon.enabled;
                });
            }
        } else if (filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.loader.addons.filter(addon => {
                    return addon.installed === true;
                });
            } else {
                return this.loader.addons.filter(addon => {
                    return !addon.installed;
                });
            }
        } else {
            return this.loader.addons;
        }
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async installAddon(identification: string): Promise<Result | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }
        if (await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
            throw new Error(`Addon [${addon.identification}] has been installed!`);
        }
        await this.syncSchema(addon);
        await this.settingService.setSetting(`addon.${addon.identification}.installed`, "1");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Install addon [${addon.identification}] successfully!`,
        };
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async uninstallAddon(identification: string): Promise<Result | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }
        if (!await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
            throw new Error(`Addon [${addon.identification}] is not installed!`);
        }
        // await this.dropSchema(addon);
        await this.settingService.setSetting(`addon.${addon.identification}.installed`, "0");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Uninstall addon [${addon.identification}] successfully!`,
        };
    }

    /**
     * @param { Addon } addon
     *
     * @returns { Promise<void> }
     */
    protected async dropSchema(addon: Addon): Promise<void> {
        const path = getPackagePathByAddon(addon);

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
     * @param { Addon } addon
     * @returns { Promise<void> }
     */
    protected async syncSchema(addon: Addon): Promise<void> {
        const path = getPackagePathByAddon(addon);

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
