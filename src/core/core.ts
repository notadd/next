import { AddonLoader, ExtensionLoader, ModuleLoader } from "@notadd/injection/loaders";
import { ConfigurationLoader } from "./loaders";

export class CoreFactory {
    /**
     * @returns { ConfigurationLoader }
     */
    public get configuration(): ConfigurationLoader {
        return new ConfigurationLoader();
    }

    /**
     * @returns { AddonLoader }
     */
    public get addon(): AddonLoader {
        return new AddonLoader();
    }

    /**
     * @returns { ExtensionLoader }
     */
    public get extension(): ExtensionLoader {
        return new ExtensionLoader();
    }

    /**
     * @returns { ModuleLoader }
     */
    public get module(): ModuleLoader {
        return new ModuleLoader();
    }
}

export const Core = new CoreFactory();
