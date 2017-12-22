import { Get, Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    handle(): string {
        return 'Hello Notadd User!';
    }
}
