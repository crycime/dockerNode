/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:42
 *
 */
import {User} from '../model';

export default interface IUserDAO {
  login(_object: User): any;
}