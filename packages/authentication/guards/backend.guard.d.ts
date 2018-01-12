import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class BackendGuard implements CanActivate {
    canActivate(request: any, context: ExecutionContext): boolean;
}
