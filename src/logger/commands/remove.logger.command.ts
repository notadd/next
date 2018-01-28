import { ICommand } from "@nestjs/cqrs";

export class RemoveLoggerCommand implements ICommand {
    /**
     * @param {number} id
     */
    constructor(
        public readonly id: number,
    ) {
    }
}
