import { NotaddFactory } from '@notadd/core';
import { ApplicationModule } from './application.module';
import { Logger } from "@nestjs/common";
import * as ip from "ip";

export async function bootstrap() {
    const port = 3000;
    const address = 'http://' + ip.address() + ':' + port;
    const application = await NotaddFactory.create(ApplicationModule);
    const logger = new Logger('NotaddFactory', true);
    await application.listen(port, () => {
        logger.log(`Server on: ${address}`);
    });
}
