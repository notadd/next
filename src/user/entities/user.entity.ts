import { Entity } from "typeorm/decorator/entity/Entity";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
