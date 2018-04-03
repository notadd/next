import { join } from "path";

export const ConfigurationPath = {
    application: join(process.cwd(), "configurations", "application.json"),
    database: join(process.cwd(), "configurations", "database.json"),
    graphql: join(process.cwd(), "configurations", "graphql.json"),
    server: join(process.cwd(), "configurations", "server.json"),
    swagger: join(process.cwd(), "configurations", "swagger.json"),
};
