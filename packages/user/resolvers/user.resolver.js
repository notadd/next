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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("../services/user.service");
const user_delete_dto_1 = require("../dtos/user.delete.dto");
const user_query_dto_1 = require("../dtos/user.query.dto");
const common_1 = require("@nestjs/common");
const authentication_1 = require("@notadd/authentication");
let UserResolver = class UserResolver {
    constructor(service) {
        this.service = service;
    }
    createUser(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.createUser(args.user);
        });
    }
    deleteUser(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteUser(args.user);
        });
    }
    deleteUserByEmail(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteUserByEmail(args.email);
        });
    }
    deleteUserById(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteUserById(args.id);
        });
    }
    deleteUserByUsername(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteUserByUsername(args.username);
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getUsers();
        });
    }
    getUserByEmail(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getUserByEmail(args.email);
        });
    }
    getUserById(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getUserById(args.id);
        });
    }
    getUserByUsername(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getUserByUsername(args.username);
        });
    }
    updateUser(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.updateUser(args.user);
        });
    }
    updateUserByEmail(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.updateUserByEmail(args.email, args.user);
        });
    }
    updateUserById(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.updateUserById(args.id, args.user);
        });
    }
    updateUserByUsername(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.updateUserByUsername(args.username, args.user);
        });
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_delete_dto_1.UserDeleteDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUserByEmail", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_delete_dto_1.UserDeleteDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUserById", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_delete_dto_1.UserDeleteDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUserByUsername", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_query_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserByEmail", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_query_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserById", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_query_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUserByUsername", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserByEmail", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserById", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUserByUsername", null);
UserResolver = __decorate([
    graphql_1.Resolver('User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
