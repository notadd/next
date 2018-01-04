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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const swagger_1 = require("@nestjs/swagger");
const auth_login_dto_1 = require("../dtos/auth.login.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getToken(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.createToken();
        });
    }
    authorized() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Authorized route...');
        });
    }
};
__decorate([
    swagger_1.ApiOperation({
        title: 'JWT Login API',
    }),
    swagger_1.ApiResponse({
        status: 201,
        description: 'User info validate correct, create a token for this user.',
    }),
    swagger_1.ApiResponse({
        status: 403,
        description: 'User info validate error.'
    }),
    common_1.Post('token'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_login_dto_1.AuthLogin]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getToken", null);
__decorate([
    common_1.Get('authorized'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authorized", null);
AuthController = __decorate([
    swagger_1.ApiUseTags('jwt'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
