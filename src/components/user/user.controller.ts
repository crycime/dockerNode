/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import { createConnection, Schema } from 'mongoose';
import {JsonController,ContentType,Controller, Post,UseBefore,Ctx,Body} from "routing-controllers";
import { Context } from 'koa';
import * as httpStatus from 'http-status';
import {Service} from "typedi";
import config from '../../common/config';
import {APIError} from "../../common/helpers/error";
import { UserDAO } from './dao';
import { User } from './model';
import { apiLogger } from '../../middleware';
import IUser from './model/user.imp.js';

@Service()
@UseBefore(apiLogger('register'))
@JsonController("/users")
export default class UserController {

  @Post("/login")
  async get(@Ctx()cxt:Context,@Body()User:User){
    const userDao=new UserDAO()
    const user=await userDao.findAll()
    return JSON.parse(JSON.stringify(user))
  }
}