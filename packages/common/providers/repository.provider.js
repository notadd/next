"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_entity_1 = require("../entities/log.entity");
const setting_entity_1 = require("../entities/setting.entity");
exports.repositoryProvider = [
    {
        provide: 'LogRepositoryToken',
        useFactory: (connection) => connection.getRepository(log_entity_1.Log),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'SettingRepositoryToken',
        useFactory: (connection) => connection.getRepository(setting_entity_1.Setting),
        inject: ['DbConnectionToken'],
    },
];
