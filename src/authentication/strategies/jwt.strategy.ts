import * as passport from "passport";
import { AuthService } from "../services";
import { Component } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";

@Component()
export class JwtStrategy extends Strategy {
    constructor(private readonly service: AuthService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true,
                secretOrKey: "secret",
            },
            async (req, payload, next) => this.verify(req, payload, next)
        );
        passport.use(this);
    }

    public async verify(req, payload, done) {
        const isValid = await this.service.validateUser(payload);
        if (!isValid) {
            return done("Unauthorized", false);
        }
        done(undefined, payload);
    }
}
