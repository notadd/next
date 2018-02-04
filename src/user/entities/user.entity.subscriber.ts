import { createHmac } from "crypto";
import {
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
} from "typeorm";
import { User } from "./user.entity";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
    /**
     * @param { InsertEvent<User> } event
     */
    beforeInsert(event: InsertEvent<User>) {
        event.entity.password = createHmac("sha256", event.entity.password).digest("hex");
    }

    /**
     * @returns { User }
     */
    listenTo() {
        return User;
    }
}
