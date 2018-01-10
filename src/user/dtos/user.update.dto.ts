import { IsNumber, IsString } from "class-validator";

export class UserUpdateDto {
    @IsNumber()
    readonly id?: Number;

    @IsString()
    readonly username?: String;

    @IsString()
    readonly email?: String;

    @IsString()
    readonly password?: String;
}
