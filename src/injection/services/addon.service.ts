import "reflect-metadata";
import { async } from "rxjs/scheduler/async";
import { Addon } from "../types/addon.type";
import { Component } from "@nestjs/common";
import { Injection } from "../types/injection.type";
import { InjectionService } from "./injection.service";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class AddonService {
    private initialized: boolean = false;

    private addons: Array<Addon> = [];

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
                return InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .forEach(async (injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);
                this.addons.push({
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: await this.settingService.get(`addon.${identification}.enabled`, false),
                    identification: identification,
                    installed: await this.settingService.get(`addon.${identification}.installed`, false),
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
     * @returns { Promise<Addon | undefined> }
     */
    public async disableAddon(identification: string): Promise<Result | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }
        await this.settingService.setSetting(`addon.${addon.identification}.enabled`, "0");

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
        if(!await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
                throw new Error(`Addon [${addon.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`addon.${addon.identification}.enabled`, "0");

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
        return this.addons.find((addon: Addon) => {
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
                return this.addons.filter(addon => {
                    return addon.enabled === true;
                });
            } else {
                return this.addons.filter(addon => {
                    return !addon.enabled;
                });
            }
        } else if (filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.addons.filter(addon => {
                    return addon.installed === true;
                });
            } else {
                return this.addons.filter(addon => {
                    return !addon.installed;
                });
            }
        } else {
            return this.addons;
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
        if(await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
            throw new Error(`Addon [${addon.identification}] has been installed!`);
        }
        await this.syncSchema(addon);
        await this.settingService.setSetting(`addon.${addon.identification}.installed`, "1");

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
        if(!await this.settingService.get<boolean>(`addon.${addon.identification}.installed`, false)) {
            throw new Error(`Addon [${addon.identification}] is not installed!`);
        }
        await this.dropSchema(addon);
        await this.settingService.setSetting(`addon.${addon.identification}.installed`, "0");

        return {
            message: `Uninstall addon [${addon.identification}] successfully!`,
        };
    }

    /**
     * @param { Addon } addon
     * @returns { Promise<void> }
     */
    protected async dropSchema(addon: Addon): Promise<void> {

    }

    /**
     * @param { Addon } addon
     * @returns { Promise<void> }
     */
    protected async syncSchema(addon: Addon): Promise<void> {

    }
}
