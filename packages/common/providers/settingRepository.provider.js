"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setting_entity_1 = require("../entities/setting.entity");
exports.settingRepositoryProvider = [
    {
        provide: 'SettingRepositoryToken',
        useFactory: (connection) => connection.getRepository(setting_entity_1.Setting),
        inject: ['DbConnectionToken'],
    },
];
