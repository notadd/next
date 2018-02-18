export const NodeVersionInformation = {
    provide: "node-version",
    useFactory: () => {
        return process.version;
    },
};
