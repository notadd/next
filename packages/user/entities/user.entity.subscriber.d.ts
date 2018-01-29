import { EntitySubscriberInterface, InsertEvent } from "typeorm";
import { User } from "./user.entity";
export declare class UserSubscriber implements EntitySubscriberInterface {
    beforeInsert(event: InsertEvent<User>): void;
    listenTo(): typeof User;
}
