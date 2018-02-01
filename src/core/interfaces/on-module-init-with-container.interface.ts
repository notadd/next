import { NestContainer } from "@nestjs/core/injector/container";

export interface OnModuleInitWithContainer {
    onModuleInitWithContainer(container: NestContainer): any;
}
