import { AddonLoader, ExtensionLoader, ModuleLoader } from "@notadd/injection/loaders";
import { ConfigurationLoader } from "./loaders";
export declare class CoreFactory {
    readonly configuration: ConfigurationLoader;
    readonly addon: AddonLoader;
    readonly extension: ExtensionLoader;
    readonly module: ModuleLoader;
}
