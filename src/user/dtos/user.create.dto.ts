import { IsString } from "class-validator";

export class UserCreateDto {
    @IsString()
    readonly username: String;

    @IsString()
    readonly email: String;

    @IsString()
    readonly password: String;
}
