import { Column, Entity } from "typeorm";

@Entity()
export class Setting {
    @Column()
    key: string;

    @Column()
    value: string;
}
