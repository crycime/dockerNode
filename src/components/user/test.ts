/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 16:42
 *
 */

import { IsString, Length, IsNotEmpty, IsAlphanumeric, IsEmail } from 'class-validator';
import { autobind } from 'core-decorators';
import { baseModel } from '../../common/repository/index';

export default class User extends baseModel<User> {
    @IsString()
    @Length(24, 24)
    _id: string;

    @IsString()
    @IsNotEmpty()
    private userName: string;

    @IsAlphanumeric()
    private password: string;

    @IsEmail()
    private email: string;

    constructor(userName: string, password: string, email: string) {
        super();
        this.userName = userName;
        this.password = password;
        this.email = email;
    }

    @autobind
    static async init(userName: string, password: string, email: string): Promise<User> {
        const obj = new User(userName, password, email);
        await obj.validate();
        return obj;
    }
}
