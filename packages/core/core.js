"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loaders_1 = require("@notadd/injection/loaders");
const loaders_2 = require("./loaders");
class CoreFactory {
    get configuration() {
        return new loaders_2.ConfigurationLoader();
    }
    get addon() {
        return new loaders_1.AddonLoader();
    }
    get extension() {
        return new loaders_1.ExtensionLoader();
    }
    get module() {
        return new loaders_1.ModuleLoader();
    }
}
exports.CoreFactory = CoreFactory;

//# sourceMappingURL=core.js.map
