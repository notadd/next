import * as jwt from "jsonwebtoken";
import { Component } from "@nestjs/common";
import { createHmac } from "crypto";
import { UserService } from "@notadd/user/service/user.service";

@Component()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }

    async createToken(username: string, password: string) {
        const user = await this.userService.getUserByName(username);
        if (typeof user === "undefined") {
            throw new Error("User Do not exists!");
        }
        if (user.password !== createHmac("sha256", password).digest("hex")) {
            throw new Error("Password is incorrect!");
        }

        const expiresIn = 60 * 60;
        const secretOrKey = "secret";
        const token = jwt.sign(user, secretOrKey, { expiresIn });

        return {
            expires: expiresIn,
            token,
        };
    }

    async validateUser(signedUser): Promise<boolean> {
        // put some validation logic here
        // for example query user by id / email / username
        return true;
    }
}
