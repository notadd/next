import { AuthService } from "../services/auth.service";
import { AuthDto } from "../dtos/auth.dto";
export declare class AuthResolvers {
    private readonly service;
    constructor(service: AuthService);
    getAuthToken(obj: any, args: {
        auth: AuthDto;
    }): Promise<any>;
}
