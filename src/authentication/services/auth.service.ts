import { Component } from "@nestjs/common";
import { UserService } from "@notadd/user/service/user.service";
import { createHash } from "crypto";
import * as jwt from "jsonwebtoken";

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

    async validateUser(signedUser): Promise<boolean> {
        // put some validation logic here
        // for example query user by id / email / username
        return true;
    }
}
