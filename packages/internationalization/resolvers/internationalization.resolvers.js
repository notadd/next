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
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
let InternationalizationResolvers = class InternationalizationResolvers {
    constructor(internationalizationService) {
        this.internationalizationService = internationalizationService;
    }
    getPhrases() {
        return this.internationalizationService.getPhrases;
    }
    translate(context, args) {
        return this.internationalizationService.translate(args.phrase, args.variables);
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], InternationalizationResolvers.prototype, "getPhrases", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], InternationalizationResolvers.prototype, "translate", null);
InternationalizationResolvers = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [services_1.InternationalizationService])
], InternationalizationResolvers);
exports.InternationalizationResolvers = InternationalizationResolvers;

//# sourceMappingURL=internationalization.resolvers.js.map
