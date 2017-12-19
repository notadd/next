import { NotaddFactory } from '@notadd/core';
import { ApplicationModule } from './application.module';

export async function bootstrap() {
    const application = await NotaddFactory.create(ApplicationModule);
    await application.listen(3000);
}
