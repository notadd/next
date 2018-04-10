import { Component } from "@nestjs/common";
import { execFileSync } from "child_process";
import { Extension } from "../interfaces";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";
import { ExtensionLoader } from "../loaders";

@Component()
export class ExtensionService {
    protected loader: ExtensionLoader = new ExtensionLoader();

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
     * @returns { Promise<Extension | undefined> }
     */
    public async getExtension(identification: string): Promise<Extension | undefined> {
        return this.loader.extensions.find((extension: Extension) => {
            return extension.identification === identification;
        });
    }

    /**
     * @param { Object } filter
     *
     * @returns { Promise<Array<Extension>> }
     */
    public async getExtensions(filter: { enabled?: boolean, installed?: boolean }): Promise<Array<Extension>> {
        if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.loader.extensions.filter(extension => {
                    return extension.enabled === true;
                });
            } else {
                return this.loader.extensions.filter(extension => {
                    return !extension.enabled;
                });
            }
        } else if (filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.loader.extensions.filter(extension => {
                    return extension.installed === true;
                });
            } else {
                return this.loader.extensions.filter(extension => {
                    return !extension.installed;
                });
            }
        } else {
            return this.loader.extensions;
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
        let shell = "";
        if (extension.shell && extension.shell.install) {
            shell = extension.shell.install;
        }
        let result = "";
        if (shell.length > 0) {
            // TODO: Add system information as options.
            result = execFileSync(shell, []).toString();
        }

        await this.settingService.setSetting(`extension.${extension.identification}.installed`, "1");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Install extension [${extension.identification}] successfully!\n${result}`,
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
        let shell = "";
        if (extension.shell && extension.shell.uninstall) {
            shell = extension.shell.uninstall;
        }
        let result = "";
        if (shell.length > 0) {
            // TODO: Add system information as options.
            result = execFileSync(shell, []).toString();
        }

        await this.settingService.setSetting(`extension.${extension.identification}.installed`, "0");
        await this.loader.refresh().syncWithSetting(this.settingService);

        return {
            message: `Uninstall extension [${extension.identification}] successfully!\n${result}`,
        };
    }
}
