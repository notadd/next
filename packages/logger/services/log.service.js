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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const clc = require("cli-color");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("typeorm");
const nest_environment_enum_1 = require("@nestjs/common/enums/nest-environment.enum");
let LogService = LogService_1 = class LogService {
    constructor(repository) {
        this.repository = repository;
    }
    getLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    getLogById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository
                .createQueryBuilder()
                .where("id = :id", {
                id: id,
            })
                .getOne();
        });
    }
    static log(message, context = '', isTimeDiffEnabled = true) {
        this.printMessage(message, clc.green, context, isTimeDiffEnabled);
    }
    static error(message, trace = '', context = '', isTimeDiffEnabled = true) {
        this.printMessage(message, clc.red, context, isTimeDiffEnabled);
        this.printStackTrace(trace);
    }
    static warn(message, context = '', isTimeDiffEnabled = true) {
        this.printMessage(message, clc.yellow, context, isTimeDiffEnabled);
    }
    static printMessage(message, color, context = '', isTimeDiffEnabled) {
        if (LogService_1.contextEnv === nest_environment_enum_1.NestEnvironment.TEST)
            return;
        process.stdout.write(color(`[Notadd] ${process.pid}   - `));
        process.stdout.write(`${new Date(Date.now()).toLocaleString()}   `);
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
        if (this.contextEnv === nest_environment_enum_1.NestEnvironment.TEST || !trace)
            return;
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
