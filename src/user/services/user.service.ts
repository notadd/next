import { Component, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Component()
export class UserService {
    // constructor(@Inject('UserRepositoryToken') private readonly repository: Repository<User>) {
    // }
    //
    // async findAll(): Promise<User[]> {
    //     return await this.repository.find();
    // }
}
