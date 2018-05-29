import { SettingService } from "@notadd/setting/services/setting.service";
import { Page } from "../interfaces";
import { PageMetadata } from "../metadatas";
export declare class PageService {
    private readonly settingService;
    private initialized;
    private pages;
    constructor(settingService: SettingService);
    getPage(identification: string): Page | undefined;
    getPages(): Array<Page>;
    initialize(metadatas: Array<PageMetadata>): void;
}
