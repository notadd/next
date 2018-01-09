import { AuthService } from "../services/auth.service";
import { AuthLogin } from "../dtos/auth.login.dto";
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    getToken(userInfo: AuthLogin): Promise<{
        expires_in: number;
        access_token: any;
    }>;
    authorized(): Promise<void>;
}
