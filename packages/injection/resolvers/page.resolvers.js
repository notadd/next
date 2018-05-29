"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const page_service_1 = require("../services/page.service");
let PageResolvers = class PageResolvers {
    constructor(pageService) {
        this.pageService = pageService;
    }
    getPage(context, args) {
        return this.pageService.getPage(args.identification);
    }
    getPages() {
        return this.pageService.getPages();
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], PageResolvers.prototype, "getPage", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PageResolvers.prototype, "getPages", null);
PageResolvers = __decorate([
    graphql_1.Resolver("Page"),
    __metadata("design:paramtypes", [page_service_1.PageService])
], PageResolvers);
exports.PageResolvers = PageResolvers;

//# sourceMappingURL=page.resolvers.js.map
