import { Get, Controller } from '@nestjs/common';

@Controller('admin')
export class BackendController {
    @Get()
    root(): string {
        return 'Hello Notadd Administration!';
    }
}
