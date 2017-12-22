import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('settings')
export class Setting {
    @PrimaryGeneratedColumn()
    key: string;

    @Column()
    value: string;
}
