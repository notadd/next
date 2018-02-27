import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { ModuleRef } from "@nestjs/core";
import { CommandBus, EventBus } from "@nestjs/cqrs";
import { AddonSagas } from "../sagas/addon.sagas";
import { ExtensionSagas } from "../sagas/extension.sagas";
import { ModuleSagas } from "../sagas/module.sagas";
export declare class InjectionModule implements OnModuleInit {
    private readonly addonSagas;
    private readonly command$;
    private readonly event$;
    private readonly extensionSagas;
    private readonly moduleRef;
    private readonly moduleSagas;
    constructor(addonSagas: AddonSagas, command$: CommandBus, event$: EventBus, extensionSagas: ExtensionSagas, moduleRef: ModuleRef, moduleSagas: ModuleSagas);
    onModuleInit(): void;
}
