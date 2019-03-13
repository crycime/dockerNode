/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import IBaseConfig, { IMongodbConfig, IKeycloakConfig, RUNTIME } from './base';

const env = `./${process.env.NODE_ENV || RUNTIME.DEVELOPER}`;
/* tslint:disable */
const config: IBaseConfig = require(env).default;

export default config;
export { IBaseConfig, IKeycloakConfig, IMongodbConfig };
