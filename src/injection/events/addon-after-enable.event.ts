import { IEvent } from "@nestjs/cqrs";

export class AddonAfterEnableEvent implements IEvent {
    constructor(public readonly identification: string) {
        console.log(this.identification);
    }
}
