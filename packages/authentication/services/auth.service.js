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
const user_service_1 = require("@notadd/user/service/user.service");
const crypto_1 = require("crypto");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async createToken(username, password) {
        const user = await this.userService.getUserByName(username);
        if (typeof user === "undefined") {
            throw new Error("User Do not exists!");
        }
        if (user.password !== crypto_1.createHash("sha256").update(password + user.salt).digest("hex")) {
            throw new Error("Password is incorrect!");
        }
        const expiresIn = 60 * 60;
        const secretOrKey = "secret";
        const playload = {
            id: user.id,
            userName: user.userName,
        };
        const token = jwt.sign(playload, secretOrKey, { expiresIn });
        return {
            expires: expiresIn,
            token,
        };
    }
    async validateUser(signedUser) {
        return true;
    }
};
AuthService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map
