import { IsString } from "class-validator";

export class AuthDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;
}
