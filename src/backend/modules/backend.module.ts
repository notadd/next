import { Logger, MiddlewaresConsumer, Module, RequestMethod } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import * as webpack from "webpack";
import { webpackExpress } from "@notadd/core/servers/webpack.server";
import { join } from "path";
import { DefinePlugin, HotModuleReplacementPlugin, NamedModulesPlugin } from "webpack";
import * as HTMLWebpackPlugin from 'html-webpack-plugin';

@Module({
})
export class BackendModule implements OnModuleInit {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddApplication", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        const compiler = webpack({
            resolve: {
                extensions: ['.js', '.json', '.js', '.jsx']
            },
            entry: {
                main: [
                    join(process.cwd(), 'node_modules', '@notadd', 'backend-mix', 'index.js')
                ]
            },
            output: {
                pathinfo: true,
                filename: 'js/[name].js',
                chunkFilename: 'js/[name].chunk.js'
            },
            module: {
                rules: [
                ]
            },
            plugins: [
                new NamedModulesPlugin(),
                new HotModuleReplacementPlugin(),
                new DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }),
                new HTMLWebpackPlugin({
                    template: join(process.cwd(), 'public', 'index.html'),
                    inject: 'body',
                    chunksSortMode: 'dependency',
                    xhtml: true
                }),
            ]
        });
        compiler.plugin('done', () => {
            console.log("done");
        });
        compiler.plugin('invalid', () => {
            console.log("invalid");
        });
        compiler.plugin('watch-run', () => {
            console.log("invalid");
        });
        compiler.plugin('run', () => {
            console.log("invalid");
        });
        compiler.watch({}, error => {
            if (error) {
                console.log(error);
            }
        });
        compiler.run(error => {
            if (error) {
                console.log(error);
            }
        });
        consumer.apply(webpackExpress(compiler, {})).forRoutes({ path: "/admin", method: RequestMethod.ALL });
    }

    onModuleInit(): any {
    }
}
