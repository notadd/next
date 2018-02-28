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
const injection_1 = require("@notadd/injection");
const modules_1 = require("@notadd/graphql/modules");
const modules_2 = require("@notadd/internationalization/modules");
const logger_1 = require("@notadd/logger");
const common_1 = require("@nestjs/common");
const setting_1 = require("@notadd/setting");
const typeorm_1 = require("@nestjs/typeorm");
const user_1 = require("@notadd/user");
const websocket_1 = require("@notadd/websocket");
const workflow_module_1 = require("@notadd/workflow/modules/workflow.module");
const informations_1 = require("../informations");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        components: [
            informations_1.SystemInformation,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
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
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
