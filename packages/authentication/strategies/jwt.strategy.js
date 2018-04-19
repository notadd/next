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
const passport = require("passport");
const services_1 = require("../services");
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
let JwtStrategy = class JwtStrategy extends passport_jwt_1.Strategy {
    constructor(service) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: "secret",
        }, async (req, payload, next) => this.verify(req, payload, next));
        this.service = service;
        passport.use(this);
    }
    async verify(req, payload, done) {
        const isValid = await this.service.validateUser(payload);
        if (!isValid) {
            return done("Unauthorized", false);
        }
        done(undefined, payload);
    }
};
JwtStrategy = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [services_1.AuthService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;

//# sourceMappingURL=jwt.strategy.js.map
