import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class UserGuard implements CanActivate {
    canActivate(request: any, context: ExecutionContext): boolean;
}
