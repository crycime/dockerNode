/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/20
 * Time: 16:04
 *
 */

import 'reflect-metadata';
import * as Koa from 'koa';
import { AuthorizationChecker } from 'routing-controllers/AuthorizationChecker.js';
import { RoutingControllersOptions } from 'routing-controllers/RoutingControllersOptions.js';
import { createKoaServer, useContainer, useKoaServer, Action } from 'routing-controllers';
import { autobind } from 'core-decorators';
import { Container } from 'typedi';
import * as koa from 'koa';
import config from '../config/index';
import { controllers } from '../../components/index';
import middleware, { guard } from '../middleware/index';
import { handler } from '../middleware/customMiddleware';

useContainer(Container);

export default class server {
    private koaApp: koa;
    private port: number;
    private controllersOptions: RoutingControllersOptions;
    private koaMiddleware: koa.Middleware[] = [];
    private customMiddleware: Function[] = [];

    public constructor(controllersOptions: { controllers: Function[] | string[] }, port: number = 7000) {
        this.controllersOptions = controllersOptions;
        this.port = port;
    }

    @autobind
    public use(options: RoutingControllersOptions) {
        this.controllersOptions = Object.assign(this.controllersOptions, options);
    }

    @autobind
    public useKoaMiddleware(middleware: koa.Middleware | koa.Middleware[]) {
        if (Array.isArray(middleware)) {
            this.koaMiddleware = this.koaMiddleware.concat(middleware);
        } else {
            this.koaMiddleware.push(middleware);
        }
    }

    @autobind
    public useCustomMiddleware(middleware: Function | Function[]) {
        if (Array.isArray(middleware)) {
            this.customMiddleware = this.customMiddleware.concat(middleware);
        } else {
            this.customMiddleware.push(middleware);
        }
    }

    @autobind
    public async startServer() {
        this.controllersOptions.middlewares = this.customMiddleware;
        console.log(this.controllersOptions.authorizationChecker);
        this.koaApp = createKoaServer(this.controllersOptions);
        this.koaMiddleware.reduce((end, current) => end.use(current), this.koaApp);
        this.koaApp.listen(this.port);
        console.log(`the server is start at port ${this.port}`);
    }
    @autobind
    public async authorizationChecker(met: AuthorizationChecker) {
        this.controllersOptions.authorizationChecker = met;
    }

    @autobind
    public static init(port: number = config.port || 7000): void {
        const app = new Koa();
        middleware.reduce((end, current) => end.use(current), app);
        useKoaServer(app, {
            authorizationChecker: async (action: Action, roles: string[]) => {
                await guard.protect(roles)(action.context, action.next);
                return true;
            },
            cors: true,
            validation: true,
            defaultErrorHandler: false, //禁用默认错误处理程序，仅当您有自己的错误处理程序时
            middlewares: [handler],
            controllers: controllers
        });
        app.listen(config.port);
        console.log(`the server is start at port ${config.port}`);
    }
}
