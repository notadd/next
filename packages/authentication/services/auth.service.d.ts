import { UserService } from "@notadd/user/service/user.service";
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    createToken(username: string, password: string): Promise<{
        expires: number;
        token: string;
    }>;
    validateUser(signedUser: any): Promise<boolean>;
}
