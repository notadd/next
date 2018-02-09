import "reflect-metadata";
import { Addon } from "../types/addon.type";
import { Component } from "@nestjs/common";
import { Injection } from "../types/injection.type";
import { InjectionService } from "./injection.service";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class AddonService {
    private initialized: boolean = false;

    private addons: Array<Addon> = [];

    constructor(
        private readonly injectionService: InjectionService,
        private readonly settingService: SettingService,
    ) {
        this.addons = this.injectionService
            .loadInjections()
            .filter((injection: Injection) => {
                return InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
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
     * @returns { Promise<Addon | undefined> }
     */
    public async disableAddon(identification: string): Promise<Addon | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async enableAddon(identification: string): Promise<Addon | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
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
    public async getAddons(filter): Promise<Array<Addon>> {
        return this.addons;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async installAddon(identification: string): Promise<Addon | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    public async uninstallAddon(identification: string): Promise<Addon | undefined> {
        const addon: Addon | undefined = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }
}
