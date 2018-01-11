import { IsNumber, IsString } from "class-validator";

export class UserDeleteDto {
    @IsNumber()
    readonly id: Number;

    @IsString()
    readonly username: String;

    @IsString()
    readonly email: String;
}
