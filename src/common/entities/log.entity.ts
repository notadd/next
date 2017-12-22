import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('logs')
export class Log {
    @PrimaryGeneratedColumn()
    key: string;

    @Column()
    value: string;
}
