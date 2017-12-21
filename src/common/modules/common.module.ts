import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Setting } from "../entities/setting.entity";

@Module({
    modules: [
        TypeOrmModule.forRoot([
            Setting,
        ]),
    ],
})
export class CommonModule {

}
