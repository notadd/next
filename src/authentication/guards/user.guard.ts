import {
    CanActivate,
    ExecutionContext,
    Guard,
} from "@nestjs/common";

@Guard()
export class UserGuard implements CanActivate {
    canActivate(request: any, context: ExecutionContext): boolean {
        return true;
    }
}
