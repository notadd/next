"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loaders_1 = require("./loaders");
const loaders_2 = require("@notadd/injection/loaders");
class CoreFactory {
    get configuration() {
        return new loaders_1.ConfigurationLoader();
    }
    get addon() {
        return new loaders_2.AddonLoader();
    }
    get extension() {
        return new loaders_2.ExtensionLoader();
    }
    get module() {
        return new loaders_2.ModuleLoader();
    }
}
exports.CoreFactory = CoreFactory;
exports.Core = new CoreFactory();
