import { CanActivate, ExecutionContext, Guard } from "@nestjs/common";

@Guard()
export class BackendGuard implements CanActivate {
    canActivate(request: any, context: ExecutionContext): boolean {
        return true;
    }
}
