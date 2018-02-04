import { AuthService } from "../services";
import { AuthDto } from "../dtos";
export declare class AuthResolvers {
    private readonly service;
    constructor(service: AuthService);
    getAuthToken(obj: any, args: {
        auth: AuthDto;
    }): Promise<any>;
}
