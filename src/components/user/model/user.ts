/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:42
 *
 */

import IUser  from './user.imp';

class User {

  // public User: IUser;
  public userName: string;
  public password: string;
  public email: string;

  constructor(userName,password,email) {
    this.userName = userName
    this.password = password
    this.email = email
    // this.User = User;
  }

  // get _id (): string {
  //   return this.User._id;
  // }
  //
  // get email (): string {
  //   return this.User.email;
  // }
  //
  // get userName (): string {
  //   return this.User.userName;
  // }
  //
  // get password (): string {
  //   return this.User.password;
  // }
}
Object.seal(User);

export default User;