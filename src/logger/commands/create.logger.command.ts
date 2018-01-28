import { ICommand } from "@nestjs/cqrs";

export class CreateLoggerCommand implements ICommand {
    /**
     * @param {string} content
     */
    constructor(
        public readonly content: string,
    ) {
    }
}
