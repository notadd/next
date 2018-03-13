"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const webpack_server_1 = require("@notadd/core/servers/webpack.server");
const webpack_1 = require("webpack");
let BackendModule = class BackendModule {
    constructor() {
        this.logger = new common_1.Logger("NotaddApplication", true);
    }
    configure(consumer) {
        const compiler = webpack({
            resolve: {
                extensions: ['.js', '.json', '.js', '.jsx']
            },
            entry: {
                main: [
                    path_1.join(process.cwd(), 'node_modules', '@notadd', 'backend-mix', 'index.js')
                ]
            },
            output: {
                pathinfo: true,
                filename: 'js/[name].js',
                chunkFilename: 'js/[name].chunk.js'
            },
            module: {
                rules: []
            },
            plugins: [
                new webpack_1.NamedModulesPlugin(),
                new webpack_1.HotModuleReplacementPlugin(),
                new webpack_1.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }),
                new HTMLWebpackPlugin({
                    template: path_1.join(process.cwd(), 'public', 'index.html'),
                    inject: 'body',
                    chunksSortMode: 'dependency',
                    xhtml: true
                }),
            ]
        });
        compiler.plugin('done', () => {
            console.log(arguments);
        });
        compiler.plugin('invalid', () => {
            console.log(arguments);
        });
        compiler.plugin('watch-run', () => {
            console.log(arguments);
        });
        compiler.plugin('run', () => {
            console.log(arguments);
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
        consumer.apply(webpack_server_1.webpackExpress(compiler, {})).forRoutes({ path: "/admin", method: common_1.RequestMethod.ALL });
    }
    onModuleInit() {
    }
};
BackendModule = __decorate([
    common_1.Module({}),
    __metadata("design:paramtypes", [])
], BackendModule);
exports.BackendModule = BackendModule;
