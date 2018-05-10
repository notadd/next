import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class BackendGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
