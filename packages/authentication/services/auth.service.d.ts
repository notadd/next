import { UserService } from "@notadd/user/services/user.service";
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    createToken(username: string, password: string): Promise<{
        expires: number;
        token: any;
    }>;
    validateUser(signedUser: any): Promise<boolean>;
}
