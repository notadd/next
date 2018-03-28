import { ConfigurationLoader } from "./loaders";
import { AddonLoader, ExtensionLoader, ModuleLoader } from "@notadd/injection/loaders";
export declare class CoreFactory {
    readonly configuration: ConfigurationLoader;
    readonly addon: AddonLoader;
    readonly extension: ExtensionLoader;
    readonly module: ModuleLoader;
}
export declare const Core: CoreFactory;
