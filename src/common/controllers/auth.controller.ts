import { Controller, Post, HttpStatus, HttpCode, Get, Body } from '@nestjs/common';
import { AuthService } from "../services/auth.service";
import { ApiOperation, ApiResponse, ApiUseTags } from "@nestjs/swagger";
import { AuthLogin } from "../dtos/auth.login.dto";

@ApiUseTags('jwt')
@Controller('auth')
export class AuthController {
    /**
     * @param { AuthService } authService
     */
    constructor(private readonly authService: AuthService) {
    }

    @ApiOperation({
        title: 'JWT Login API',
    })
    @ApiResponse({
        status: 201,
        description: 'User info validate correct, create a token for this user.',
    })
    @ApiResponse({
        status: 403,
        description: 'User info validate error.'
    })
    @Post('token')
    public async getToken(@Body() userInfo: AuthLogin) {
        return await this.authService.createToken();
    }

    @Get('authorized')
    public async authorized() {
        console.log('Authorized route...');
    }
}
