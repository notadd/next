import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsString } from "class-validator";

@Entity('settings')
export class Setting {
    @PrimaryGeneratedColumn()
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
