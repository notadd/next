export declare class AuthService {
    createToken(): Promise<{
        expires_in: number;
        access_token: any;
    }>;
    validateUser(signedUser: any): Promise<boolean>;
}
