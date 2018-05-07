"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const clc = require("cli-color");
const os = require("os");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const nest_environment_enum_1 = require("@nestjs/common/enums/nest-environment.enum");
const typeorm_2 = require("typeorm");
const loaders_1 = require("@notadd/core/loaders");
let LogService = LogService_1 = class LogService {
    constructor(repository) {
        this.repository = repository;
    }
    async getLogs() {
        return this.repository.find();
    }
    async getLogById(id) {
        return this.repository
            .createQueryBuilder()
            .where("id = :id", {
            id,
        })
            .getOne();
    }
    static log(message, context = "", isTimeDiffEnabled = true) {
        this.printMessage(message, clc.green, context, isTimeDiffEnabled);
    }
    static error(message, trace = "", context = "", isTimeDiffEnabled = true) {
        this.printMessage(message, clc.red, context, isTimeDiffEnabled);
        this.printStackTrace(trace);
    }
    static warn(message, context = "", isTimeDiffEnabled = true) {
        this.printMessage(message, clc.yellow, context, isTimeDiffEnabled);
    }
    static printMessage(message, color, context = "", isTimeDiffEnabled) {
        if (LogService_1.contextEnv === nest_environment_enum_1.NestEnvironment.TEST) {
            return;
        }
        const configuration = loaders_1.Configuration.loadApplicationConfiguration();
        const date = new Date(Date.now());
        const file = `${process.cwd()}/storages/logs/${date.toLocaleDateString(configuration.timezone)}.log`;
        const text = `[Notadd] ${process.pid}   - ${date.toLocaleString(configuration.timezone)}   [${context}] ${message}${os.EOL}`;
        fs_1.appendFileSync(file, text);
        process.stdout.write(color(`[Notadd] ${process.pid}   - `));
        process.stdout.write(`${date.toLocaleString()}   `);
        process.stdout.write(this.yellow(`[${context}] `));
        process.stdout.write(color(message));
        this.printTimestamp(isTimeDiffEnabled);
        process.stdout.write(`\n`);
    }
    static printTimestamp(isTimeDiffEnabled) {
        const includeTimestamp = LogService_1.prevTimestamp && isTimeDiffEnabled;
        if (includeTimestamp) {
            process.stdout.write(this.yellow(` +${Date.now() - LogService_1.prevTimestamp}ms`));
        }
        LogService_1.prevTimestamp = Date.now();
    }
    static printStackTrace(trace) {
        if (this.contextEnv === nest_environment_enum_1.NestEnvironment.TEST || !trace) {
            return;
        }
        process.stdout.write(trace);
        process.stdout.write(`\n`);
    }
};
LogService.prevTimestamp = Date.now();
LogService.contextEnv = nest_environment_enum_1.NestEnvironment.RUN;
LogService.yellow = clc.xterm(3);
LogService = LogService_1 = __decorate([
    common_1.Component(),
    __param(0, typeorm_1.InjectRepository(entities_1.Log)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LogService);
exports.LogService = LogService;
var LogService_1;

//# sourceMappingURL=log.service.js.map
