import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class UserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
