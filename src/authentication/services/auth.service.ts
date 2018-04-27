import * as jwt from "jsonwebtoken";
import { Component } from "@nestjs/common";
import { createHash } from "crypto";
import { UserService } from "@notadd/user/service/user.service";

@Component()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }

    /**
     * @param { string } username
     * @param { string } password
     * @returns { Promise<{expires: number; token: string}> }
     */
    async createToken(username: string, password: string) {
        const user = await this.userService.getUserByName(username);
        if (typeof user === "undefined") {
            throw new Error("User Do not exists!");
        }
        if (user.password !== createHash("sha256").update(password + user.salt).digest("hex")) {
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
