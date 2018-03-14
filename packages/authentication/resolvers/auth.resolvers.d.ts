import { AuthDto } from "../dtos";
import { AuthService } from "../services";
export declare class AuthResolvers {
    private readonly service;
    constructor(service: AuthService);
    getAuthToken(obj: any, args: {
        auth: AuthDto;
    }): Promise<any>;
}
