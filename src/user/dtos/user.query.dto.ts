import { IsNumber, IsString } from "class-validator";

export class UserQueryDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;
}
