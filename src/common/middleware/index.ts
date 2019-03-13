/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/23
 * Time: 11:15
 *
 */
import { Middleware } from 'koa';
import * as koalogger from 'koa-logger';
import guard from './guard';
const koaLogger = koalogger();

const middleware: Middleware[] = [];
middleware.push(koaLogger);
middleware.push(...guard.middleware());

export default middleware;
export { guard };
