"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@notadd/authentication");
const backend_1 = require("@notadd/backend");
const loaders_1 = require("@notadd/core/loaders");
const modules_1 = require("@notadd/graphql/modules");
const injection_1 = require("@notadd/injection");
const modules_2 = require("@notadd/internationalization/modules");
const logger_1 = require("@notadd/logger");
const common_1 = require("@nestjs/common");
const setting_1 = require("@notadd/setting");
const informations_1 = require("../informations");
const typeorm_1 = require("@nestjs/typeorm");
const user_1 = require("@notadd/user");
const websocket_1 = require("@notadd/websocket");
const workflow_module_1 = require("@notadd/workflow/modules/workflow.module");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(loaders_1.Configuration.loadDatabaseConfiguration()),
            modules_1.GraphqlModule,
            websocket_1.WebsocketModule,
            modules_2.InternationalizationModule,
            logger_1.LoggerModule,
            setting_1.SettingModule,
            injection_1.InjectionModule,
            workflow_module_1.WorkflowModule,
            backend_1.BackendModule,
            user_1.UserModule,
            authentication_1.AuthenticationModule,
        ],
        providers: [
            informations_1.SystemInformation,
        ],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;

//# sourceMappingURL=application.module.js.map
