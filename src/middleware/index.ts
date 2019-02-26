/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/23
 * Time: 11:15
 *
 */
import * as koalogger from 'koa-logger';
import handler from './customMiddleware/handlers';
import apiLogger from './customMiddleware/logger';

const koaLogger=koalogger()

export{
  apiLogger,
  handler,
  koaLogger
}