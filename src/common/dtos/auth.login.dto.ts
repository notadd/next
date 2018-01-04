import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class AuthLogin {
    @ApiModelProperty({
        default: 'username',
        required: true,
        type: String,
    })
    @IsString()
    readonly username: string;

    @ApiModelProperty({
        default: 'password',
        required: true,
        type: String,
    })
    @IsString()
    readonly password: string;
}
