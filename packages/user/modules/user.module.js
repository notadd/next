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
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const database_module_1 = require("@notadd/common/modules/database.module");
const repository_provider_1 = require("../providers/repository.provider");
const user_resolver_1 = require("../resolvers/user.resolver");
let UserModule = class UserModule {
    constructor() {
        this.logger = new common_1.Logger('NotaddApplication', true);
    }
};
UserModule = __decorate([
    common_1.Module({
        components: [
            ...repository_provider_1.repositoryProvider,
            user_resolver_1.UserResolver,
            user_service_1.UserService,
        ],
        imports: [
            database_module_1.DatabaseModule
        ],
    }),
    __metadata("design:paramtypes", [])
], UserModule);
exports.UserModule = UserModule;
