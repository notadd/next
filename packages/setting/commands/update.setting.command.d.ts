import { ICommand } from "@nestjs/cqrs";
export declare class UpdateSettingCommand implements ICommand {
    readonly key: string;
    readonly value: string;
    constructor(key: string, value: string);
}
