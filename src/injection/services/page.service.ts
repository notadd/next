import { Injectable } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

import { PageMetadata } from "../metadatas/page.metadata";
import { Page } from "../interfaces/page.interface";

@Injectable()
export class PageService {
    private initialized = false;

    private pages: Array<Page> = [];

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     *
     * @returns { Page | undefined }
     */
    public getPage(identification: string): Page | undefined {
        return this.pages.find(page => {
            return page.identification === identification;
        });
    }

    /**
     * @returns { Array<Page> }
     */
    public getPages(): Array<Page> {
        return this.pages;
    }

    /**
     * @param { Array<PageMetadata> } metadatas
     */
    public initialize(metadatas: Array<PageMetadata>) {
        this.pages = metadatas
            .filter(metadata => {
                return metadata.form
                    && metadata.identification
                    && metadata.name
                    && metadata.schema;
            })
            .map(metadata => {
                return {
                    description: metadata.description ? metadata.description : "",
                    form: metadata.form && metadata.form.callback ? metadata.form.callback() : [],
                    identification: metadata.identification ? metadata.identification : "",
                    name: metadata.name ? metadata.name : "",
                    schema: metadata.schema && metadata.schema.callback ? metadata.schema.callback() : {},
                };
            });
        this.initialized = true;
    }
}
