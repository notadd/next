import { Get, Controller} from '@nestjs/common';

@Controller()
export class ApplicationController {
    @Get()
    handle(): string {
        return 'Hello Notadd!';
    }
}
