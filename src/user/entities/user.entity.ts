import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        type: "varchar",
    })
    username: string;

    @Column({
        length: 100,
        type: "varchar",
    })
    @Index({
        unique: true,
    })
    email: string;

    @Column({
        length: 300,
        type: "varchar",
    })
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
