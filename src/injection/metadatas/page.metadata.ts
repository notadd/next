import { PageFormMetadata } from "./page-form.metadata";
import { PageSchemaMetadata } from "./page-schema.metadata";

export class PageMetadata {
    description?: string;
    form?: PageFormMetadata;
    identification?: string;
    name?: string;
    schema?: PageSchemaMetadata;
}
