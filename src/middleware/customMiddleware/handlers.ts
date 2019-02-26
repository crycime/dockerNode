/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/29
 * Time: 12:04
 *
 */
import {Context} from 'koa';
import {KoaMiddlewareInterface,Middleware} from "routing-controllers";

@Middleware({type: "before", priority: 50})
export default class Handler implements KoaMiddlewareInterface { // interface implementation is optional

  async use(context: Context, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      return await next();
    } catch (err) {
      const httpCode= err.statusCode || err.httpCode||err.status || 500;
      context.response.status = httpCode
      context.response.body = {
        name:err.name,
        httpCode,
        message:err.message,
        errors:err.errors
      };
      context.app.emit('error', err, context);
    }
  }
}