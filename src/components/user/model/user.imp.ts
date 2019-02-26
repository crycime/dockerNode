/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:42
 *
 */


import { Document } from 'mongoose';

export default interface IUser extends Document {

  _id:string;

  userName: string;

  password: string;

  email: string;
}
