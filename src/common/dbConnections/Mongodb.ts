/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import { autobind } from 'core-decorators';
import { createConnection,Connection,connection } from 'mongoose';
import config,{ IMongodbConfig } from '../config';

class Mongodb {

  static mongooseInstance: any;
  static mongooseConnection: Connection;

  public constructor(obj: IMongodbConfig ) {
    createConnection(obj.uri, obj.option);
  }

  @autobind
  static connect (): Connection {
    if(this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection  = connection;
    this.mongooseConnection.once("open", () => {
      console.log("Conectado ao mongodb.");
    });

    this.mongooseInstance = createConnection(config.mongodb.uri, config.mongodb.option);
    return this.mongooseInstance;
  }

}

Mongodb.connect();

export default Mongodb;

