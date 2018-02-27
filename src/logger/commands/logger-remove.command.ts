import { ICommand } from "@nestjs/cqrs";

export class LoggerRemoveCommand implements ICommand {
    /**
     * @param {number} id
     */
    constructor(
        public readonly id: number,
    ) {
    }
}
