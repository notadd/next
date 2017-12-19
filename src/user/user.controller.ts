import { Get, Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    root(): string {
        return 'Hello Notadd User!';
    }
}
