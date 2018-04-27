import { Strategy } from "passport-jwt";
import { AuthService } from "../services";
export declare class JwtStrategy extends Strategy {
    private readonly service;
    constructor(service: AuthService);
    verify(req: any, payload: any, done: any): Promise<any>;
}
