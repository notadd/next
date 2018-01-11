import { IsNumber, IsString } from "class-validator";

export class UserDeleteDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly username: string;

    @IsString()
    readonly email: string;
}
