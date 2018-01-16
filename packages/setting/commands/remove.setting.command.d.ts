import { ICommand } from "@nestjs/cqrs";
export declare class RemoveSettingCommand implements ICommand {
    readonly key: string;
    constructor(key: string);
}
