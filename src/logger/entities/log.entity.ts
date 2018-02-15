import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { IsString } from "class-validator";

@Entity("logs")
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
    })
    @IsString()
    content: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
