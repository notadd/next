import { ICommand } from "@nestjs/cqrs";
export declare class LoggerCreateCommand implements ICommand {
    readonly content: string;
    constructor(content: string);
}
