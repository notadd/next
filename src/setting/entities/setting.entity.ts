import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { IsString } from "class-validator";

@Entity("settings")
export class Setting {
    @PrimaryColumn()
    @IsString()
    key: string;

    @Column()
    @IsString()
    value: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
