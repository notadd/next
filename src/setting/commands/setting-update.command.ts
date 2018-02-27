import { ICommand } from "@nestjs/cqrs";

export class SettingUpdateCommand implements ICommand {
    constructor(
        public readonly key: string,
        public readonly value: string,
    ) {
    }
}
