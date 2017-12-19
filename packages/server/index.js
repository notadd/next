"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@notadd/core");
const application_module_1 = require("./application.module");
async function bootstrap() {
    const application = await core_1.NotaddFactory.create(application_module_1.ApplicationModule);
    await application.listen(3000);
}
exports.bootstrap = bootstrap;
