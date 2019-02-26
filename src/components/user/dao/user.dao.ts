import { autobind } from 'core-decorators';
import IUserDao from './user.dao.imp';
import {IUser,User,UserSchema} from '../model';
import {baseDao} from '../../../repository/index';


/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:41
 *
 */

class UserDao extends baseDao<IUser> implements IUserDao{

  constructor () {
    super(UserSchema);
  }

  // 查询邮件
  @autobind
  public async login(User:User):Promise<IUser> {
    return await this._model.findOne({userName:User.userName,password:User.password})
  }

}

Object.seal(UserDao);
export default UserDao;

