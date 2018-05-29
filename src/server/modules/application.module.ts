import { AuthenticationModule } from "@notadd/authentication";
import { BackendModule } from "@notadd/backend";
import { Configuration } from "@notadd/core/loaders";
import { GraphqlModule } from "@notadd/graphql/modules";
import { InjectionModule } from "@notadd/injection";
import { InternationalizationModule } from "@notadd/internationalization/modules";
import { LoggerModule } from "@notadd/logger";
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting";
import { SystemInformation } from "../informations";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@notadd/user";
import { WebsocketModule } from "@notadd/websocket";
import { WorkflowModule } from "@notadd/workflow/modules/workflow.module";
import { LocalModule } from "@notadd/addon-local/local.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(Configuration.loadDatabaseConfiguration()),
        GraphqlModule,
        WebsocketModule,
        InternationalizationModule,
        LoggerModule,
        SettingModule,
        WorkflowModule,
        BackendModule,
        UserModule,
        LocalModule,
        InjectionModule,
        // AuthenticationModule,
    ],
    providers: [
        SystemInformation,
    ],
})
export class ApplicationModule {
}
