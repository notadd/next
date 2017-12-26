"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
const ormConfigFilePath = process.cwd() + '/ormconfig.yml';
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () { return typeorm_1.createConnection(js_yaml_1.load(fs_1.readFileSync(ormConfigFilePath).toString()).default); }),
    },
];
