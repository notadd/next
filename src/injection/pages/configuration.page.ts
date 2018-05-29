import { Form, Page, Schema } from "../decorators";

@Page({
    description: "",
    identification: "configuration",
    name: "Configuration Page",
})
export class ConfigurationPage {
    @Form()
    public form() {
        return [];
    }

    @Schema()
    public schema() {
        return {};
    }
}
