import { Form, Page, Schema } from "../decorators/page.decorator";

@Page({
    description: "",
    name: "configuration",
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
