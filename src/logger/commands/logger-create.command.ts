import { ICommand } from "@nestjs/cqrs";

export class LoggerCreateCommand implements ICommand {
    /**
     * @param {string} content
     */
    constructor(
        public readonly content: string,
    ) {
    }
}
