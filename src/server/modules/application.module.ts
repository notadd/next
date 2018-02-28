import { AuthenticationModule } from "@notadd/authentication";
import { BackendModule } from "@notadd/backend";
import { InjectionModule } from "@notadd/injection";
import { GraphqlModule } from "@notadd/graphql/modules";
import { InternationalizationModule } from "@notadd/internationalization/modules";
import { LoggerModule } from "@notadd/logger";
import { mergeTypes } from 'merge-graphql-schemas';
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@notadd/user";
import { WebsocketModule } from "@notadd/websocket";
import { WorkflowModule } from "@notadd/workflow/modules/workflow.module";
import { SystemInformation } from "../informations";

@Module({
    components: [
        SystemInformation,
    ],
    imports: [
        TypeOrmModule.forRoot(),
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
