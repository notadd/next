import { AuthService } from "../services/auth.service";
import { Strategy } from 'passport-jwt';
export declare class JwtStrategy extends Strategy {
    private readonly service;
    constructor(service: AuthService);
    verify(req: any, payload: any, done: any): Promise<any>;
}
