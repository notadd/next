import { ICommand } from "@nestjs/cqrs";
export declare class RemoveLoggerCommand implements ICommand {
    readonly id: number;
    constructor(id: number);
}
