/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */
import * as jsonfile from 'jsonfile';
import * as path from 'path';
import { Context } from 'koa';
import { configure, getLogger, Logger } from 'log4js'; // 日志

import json = require( '../../common/config/log4j.json');

// 加载日志配置文件
configure(json);

/**
 * @description  日志配置名獲取
 *
 */
const loggerUtil = (name: string, level?: string): Logger => {
  let falg = false;
  for (const obj in json.appenders) {
    if (obj === name) {
      falg = true;
    }
  }
  // 判斷JSON是否存在日志配置
  if (falg) {
    const logger = getLogger(name);
    logger.level = level || 'trace';
    return logger;
  } else {
    // 不存在配置日志
    json.appenders[name] = {
      type: 'dateFile',
      filename: `log/${name}/`,
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      category: "http",
      maxLogSize: 1048576,
      backups: 20,
    };
    json.categories.default.appenders.push(name);
    jsonfile.writeFileSync(path.join(__dirname, '../common/config/log4j.json'), json, { spaces: 2 });
    // 重新加載日志配置
    configure(json);
    const logger = getLogger(name);
    logger.level = level || 'trace';
    return logger;
  }
};

const apiLogger =(name:any) =>{
  const logger = loggerUtil(name);
  return async (ctx: Context, next: (err?: any) => Promise<any>) => {
    try {
      return await next();
    } catch (err) {
      let errReturn;
      if (typeof err === 'object') {
        errReturn = err.message;
      } else {
        errReturn = err;
      }
      logger.error(
        ctx.method + '  ' + ctx.url + ' Fail,\n query:%s \n error:%s', JSON.stringify(ctx.body),
        errReturn,
      );
      throw err
    }
  }
}

export default apiLogger

export {
  loggerUtil,
  apiLogger,
};
