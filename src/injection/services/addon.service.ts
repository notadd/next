import "reflect-metadata";
import { Addon } from "@notadd/core/injectors/addon.injector";
import { Component } from "@nestjs/common";
import { InjectionService } from "./injection.service";
import { SettingService } from "@notadd/setting/services/setting.service";
import { InjectionType } from "@notadd/core/constants/injection.constants";

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
            .filter((instance: Function) => {
                const injectionType = Reflect.getMetadata("__injection_type__", instance);

                return injectionType === InjectionType.Addon;
            })
            .map((instance: Function) => {
                return {
                    identification: Reflect.getMetadata("identification", instance),
                };
            });
        this.initialized = true;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon> }
     */
    public async disableAddon(identification: string): Promise<Addon> {
        const addon: Addon = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon> }
     */
    public async enableAddon(identification: string): Promise<Addon> {
        const addon: Addon = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon | undefined> }
     */
    public async getAddon(identification: string): Promise<Addon | undefined> {
        return this.addons.find((addon: Addon) => {
            return addon.identification = identification;
        });
    }

    /**
     * @param filter
     * @returns { Promise<Array<Addon>> }
     */
    public async getAddons(filter): Promise<Array<Addon>> {
        return this.addons;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon> }
     */
    public async installAddon(identification: string): Promise<Addon> {
        const addon: Addon = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon> }
     */
    public async uninstallAddon(identification: string): Promise<Addon> {
        const addon: Addon = await this.getAddon(identification);
        if (!addon) {
            throw new Error("Addon do not exists!");
        }

        return addon;
    }
}
