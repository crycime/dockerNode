/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:42
 *
 */


import { Connection,Schema } from 'mongoose';
import { mongodb } from '../../../common/dbConnections/index';
import IUser from './user.imp';

const db:Connection = mongodb.mongooseInstance;

const UserSchema = new Schema(
  {
    userName: String,

    password: String,

    email: String
  }
);


const schema = db.model<IUser>("Heroes", UserSchema);

export default schema;