import { AuthenticationModule } from "@notadd/authentication";
import { BackendModule } from "@notadd/backend";
import { GraphqlModule } from "@notadd/graphql/modules";
import { InjectionModule } from "@notadd/injection";
import { InternationalizationModule } from "@notadd/internationalization/modules";
import { LoggerModule } from "@notadd/logger";
import { mergeTypes } from 'merge-graphql-schemas';
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting";
import { SystemInformation } from "../informations";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@notadd/user";
import { WebsocketModule } from "@notadd/websocket";
import { WorkflowModule } from "@notadd/workflow/modules/workflow.module";
import { join } from "path";
import { ConnectionOptions } from 'typeorm';

const configuration: ConnectionOptions = require(join(process.cwd(), "configurations", "database.json"));

@Module({
    components: [
        SystemInformation,
    ],
    imports: [
        TypeOrmModule.forRoot(configuration),
        GraphqlModule,
        WebsocketModule,
        InternationalizationModule,
        LoggerModule,
        SettingModule,
        InjectionModule,
        WorkflowModule,
        BackendModule,
        UserModule,
        AuthenticationModule,
    ],
})
export class ApplicationModule {
}
