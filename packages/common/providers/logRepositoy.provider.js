"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_entity_1 = require("../entities/log.entity");
exports.logRepositoryProvider = [
    {
        provide: 'LogRepositoryToken',
        useFactory: (connection) => connection.getRepository(log_entity_1.Log),
        inject: ['DbConnectionToken'],
    },
];
