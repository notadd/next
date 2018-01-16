import { ICommand } from "@nestjs/cqrs";

export class UpdateSettingCommand implements ICommand {
    constructor(
        public readonly key: string,
        public readonly value: string,
    ) {
    }
}
