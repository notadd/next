import { Get, Controller } from '@nestjs/common';

@Controller()
export class ApplicationController {
    @Get()
    root(): string {
        return 'Hello Notadd!';
    }
}
