import { Column, Entity } from "typeorm";

@Entity()
export class Log {
    @Column()
    key: string;

    @Column()
    value: string;
}
