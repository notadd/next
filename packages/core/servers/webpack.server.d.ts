/// <reference types="webpack" />
/// <reference types="express" />
import * as webpack from "webpack";
import { Request, Response } from "express";
import { WebpackConfiguration } from "../interfaces/webpack-configuration.interface";
export declare function webpackExpress(compiler: webpack.Compiler, options: WebpackConfiguration): (request: Request, response: Response, next: any) => void;
