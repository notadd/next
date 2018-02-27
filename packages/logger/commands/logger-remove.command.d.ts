import { ICommand } from "@nestjs/cqrs";
export declare class LoggerRemoveCommand implements ICommand {
    readonly id: number;
    constructor(id: number);
}
