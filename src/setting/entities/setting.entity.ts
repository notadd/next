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
    @PrimaryColumn({
        length: 500,
        type: "varchar",
    })
    @IsString()
    key: string;

    @Column({
        type: "text",
    })
    @IsString()
    value: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
