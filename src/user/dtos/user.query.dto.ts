import { IsNumber, IsString } from "class-validator";

export class UserQueryDto {
    @IsNumber()
    readonly id?: Number;

    @IsString()
    readonly username?: String;

    @IsString()
    readonly email?: String;

    @IsString()
    readonly password?: String;
}
