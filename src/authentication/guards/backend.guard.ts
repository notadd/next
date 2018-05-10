import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class BackendGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        return true;
    }
}
