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
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const user_service_1 = require("@notadd/user/service/user.service");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    createToken(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUserByName(username);
            if (typeof user === "undefined") {
                throw new Error("User Do not exists!");
            }
            if (user.password !== crypto_1.createHmac("sha256", password).digest("hex")) {
                throw new Error("Password is incorrect!");
            }
            const expiresIn = 60 * 60;
            const secretOrKey = "secret";
            const token = jwt.sign(user, secretOrKey, { expiresIn });
            return {
                expires: expiresIn,
                token,
            };
        });
    }
    validateUser(signedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
};
AuthService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
