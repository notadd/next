import { AuthDto } from "../dtos";
import { AuthService } from "../services/auth.service";
export declare class AuthResolvers {
    private readonly service;
    constructor(service: AuthService);
    getAuthToken(obj: any, args: {
        auth: AuthDto;
    }): Promise<any>;
}
