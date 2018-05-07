import * as clc from "cli-color";
import * as os from "os";
import { appendFileSync } from "fs";
import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Log } from "../entities";
import { NestEnvironment } from "@nestjs/common/enums/nest-environment.enum";
import { Repository } from "typeorm";
import { Configuration } from "@notadd/core/loaders";

@Component()
export class LogService {
    private static prevTimestamp = Date.now();

    private static contextEnv = NestEnvironment.RUN;

    private static readonly yellow = clc.xterm(3);

    /**
     * @param { Repository<Log> } repository
     */
    constructor(
        @InjectRepository(Log)
        private readonly repository: Repository<Log>,
    ) {
    }

    /**
     * @returns { Promise<Array<Log>> }
     */
    public async getLogs(): Promise<Array<Log>> {
        return this.repository.find();
    }

    /**
     * @param { Number } id
     *
     * @returns { Promise<Log> }
     */
    public async getLogById(id: number): Promise<Log | undefined> {
        return this.repository
            .createQueryBuilder()
            .where("id = :id", {
                id,
            })
            .getOne();
    }

    static log(message: string, context = "", isTimeDiffEnabled = true) {
        this.printMessage(message, clc.green, context, isTimeDiffEnabled);
    }

    static error(
        message: string,
        trace = "",
        context = "",
        isTimeDiffEnabled = true,
    ) {
        this.printMessage(message, clc.red, context, isTimeDiffEnabled);
        this.printStackTrace(trace);
    }

    static warn(message: string, context = "", isTimeDiffEnabled = true) {
        this.printMessage(message, clc.yellow, context, isTimeDiffEnabled);
    }

    private static printMessage(
        message: string,
        color: (msg: string) => string,
        context = "",
        isTimeDiffEnabled?: boolean,
    ) {
        if (LogService.contextEnv === NestEnvironment.TEST) {
            return;
        }

        const configuration = Configuration.loadApplicationConfiguration();
        const date = new Date(Date.now());
        const file = `${process.cwd()}/storages/logs/${date.toLocaleDateString(configuration.timezone)}.log`;
        const text = `[Notadd] ${process.pid}   - ${date.toLocaleString(configuration.timezone)}   [${context}] ${message}${os.EOL}`;
        appendFileSync(file, text);

        process.stdout.write(color(`[Notadd] ${process.pid}   - `));
        process.stdout.write(`${date.toLocaleString()}   `);
        process.stdout.write(this.yellow(`[${context}] `));
        process.stdout.write(color(message));

        this.printTimestamp(isTimeDiffEnabled);
        process.stdout.write(`\n`);
    }

    private static printTimestamp(isTimeDiffEnabled?: boolean) {
        const includeTimestamp = LogService.prevTimestamp && isTimeDiffEnabled;
        if (includeTimestamp) {
            process.stdout.write(
                this.yellow(` +${Date.now() - LogService.prevTimestamp}ms`),
            );
        }
        LogService.prevTimestamp = Date.now();
    }

    private static printStackTrace(trace: string) {
        if (this.contextEnv === NestEnvironment.TEST || !trace) {
            return;
        }

        process.stdout.write(trace);
        process.stdout.write(`\n`);
    }
}
