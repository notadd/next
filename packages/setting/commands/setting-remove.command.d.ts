import { ICommand } from "@nestjs/cqrs";
export declare class SettingRemoveCommand implements ICommand {
    readonly key: string;
    constructor(key: string);
}
