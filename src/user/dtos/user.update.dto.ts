import { IsNumber, IsString } from "class-validator";

export class UserUpdateDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;
}
