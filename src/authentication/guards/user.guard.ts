import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class UserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        return true;
    }
}
