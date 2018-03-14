/// <reference types="express" />
import { Request, Response } from "express";
import { WebpackConfiguration } from "../interfaces/webpack-configuration.interface";
export declare function webpackExpress(options: WebpackConfiguration): (request: Request, response: Response, next: any) => void;
