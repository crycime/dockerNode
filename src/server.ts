/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/20
 * Time: 16:04
 *
 */

import 'reflect-metadata';
import { RoutingControllersOptions } from 'routing-controllers/RoutingControllersOptions.js';
import { createKoaServer, useContainer } from 'routing-controllers';
import { autobind } from 'core-decorators';
import { Container } from 'typedi';
import * as koa from 'koa';
import { controllers } from './components';
import { handler, koaLogger } from './middleware';

useContainer(Container);

export default class server {
  private koaApp: koa;
  private port: number;
  private controllersOptions: RoutingControllersOptions;
  private koaMiddleware: koa.Middleware[]=[];
  private customMiddleware: Function[]=[];


  public constructor(controllersOptions:{controllers: Function[] | string[]},port:number=7000) {
    this.controllersOptions = controllersOptions;
    this.port = port;
  }

  @autobind
  public use(options:RoutingControllersOptions) {
    this.controllersOptions=Object.assign(this.controllersOptions,options);
  }

  @autobind
  public useKoaMiddleware(middleware:koa.Middleware|koa.Middleware[]) {
    if (Array.isArray(middleware)){
      this.koaMiddleware=this.koaMiddleware.concat(middleware)
    }else{
      this.koaMiddleware.push(middleware)
    }
  }

  @autobind
  public useCustomMiddleware(middleware:Function|Function[]) {
    if (Array.isArray(middleware)) {
      this.customMiddleware=this.customMiddleware.concat(middleware);
    }else{
      this.customMiddleware.push(middleware);
    }
  }

  @autobind
  public async startServer (){
    this.controllersOptions.middlewares=this.customMiddleware;
    this.koaApp =createKoaServer(this.controllersOptions);
    this.koaMiddleware.reduce((end, current) => end.use(current), this.koaApp);
    this.koaApp.listen( this.port);
    console.log(`the server is start at port ${ this.port}`)
  }

  @autobind
  public static init(port:number=7000): void {
    //创建服务
    const app = new server({controllers: controllers});
    //添加cors属性
    app.use({cors: true})
    // //添加属性验证
    app.use({validation: true})
    // //开启自定义错误处理
    app.use({defaultErrorHandler: false})
    //使用自定义中间件
    app.useCustomMiddleware(handler)
    //使用koa中间件
    app.useKoaMiddleware(koaLogger)
    //开启服务
    app.startServer()

  }
}
