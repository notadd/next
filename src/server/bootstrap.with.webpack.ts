import { BackendPlugin } from "@already/webpack-plugins";
import { join } from "path";
import * as webpack from "webpack";
import * as nodeExternals from "webpack-node-externals";

const entry = join(
    process.cwd(),
    "src",
    "server",
    "bootstrap.ts",
);

const output = join(
    process.cwd(),
    "storages",
    "caches",
);

const configuration: webpack.Configuration = {
    entry: [
        "webpack/hot/poll?1000",
        entry,
    ],
    watch: true,
    target: "node",
    externals: [
        nodeExternals({
            whitelist: [
                "webpack/hot/poll?1000",
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js",
        ],
    },
    plugins: [
        new BackendPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: output,
        filename: "server.js",
    },
};

webpack.run(configuration);
