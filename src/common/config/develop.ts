/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 14:56
 *
 */
import * as BlurBird from 'bluebird';
import IBaseConfig, {
  IMongodbConfig,
  RUNTIME,
} from './base';


const mongodb: IMongodbConfig = {
  uri: 'mongodb://localhost:27017/data3',
  option: {
    poolSize: 10,
    // user: 'ptahuser',
    // pass: 'Ptah@6cF0d',
    ssl: null,
    useNewUrlParser: true,
    promiseLibrary: BlurBird,
  },
};

const develop: IBaseConfig = {
  port: 3000,
  runtime: RUNTIME.DEVELOPER,
  mongodb
};
export default develop;
