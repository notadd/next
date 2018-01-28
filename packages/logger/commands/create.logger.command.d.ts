import { ICommand } from "@nestjs/cqrs";
export declare class CreateLoggerCommand implements ICommand {
    readonly content: string;
    constructor(content: string);
}
