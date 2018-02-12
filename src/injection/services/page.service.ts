import { Component } from "@nestjs/common";
import { PageExplorerService } from "./page-explorer.service";

@Component()
export class PageService {
    constructor(private readonly pageExplorerService: PageExplorerService) {
    }
}
