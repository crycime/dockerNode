/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import { JsonController, Post, UseBefore, Ctx, Body, Param, Authorized } from 'routing-controllers';
import { Context } from 'koa';
import { Service } from 'typedi';
import { checkRole } from '../../common/middleware/guard';
import { UserDAO } from './dao';
import { User, IUser } from './model';
import { apiLogger } from '../../common/middleware/customMiddleware';
import { keycloak } from '../../common/server/keycloak';
import { json } from '../../common/util';

@Service()
@Authorized()
@UseBefore(apiLogger('register'))
@JsonController('/users')
export default class UserController {
    private keycloakUtil: keycloak;
    private userDao: UserDAO;

    constructor() {
        this.keycloakUtil = new keycloak();
        this.userDao = new UserDAO();
    }

    @Post('/login')
    async get(@Ctx() cxt: Context, @Body() User: User) {
        const user = await this.userDao.login(User);
        return json.objParse(user);
    }

    @Post('/')
    async register(@Ctx() cxt: Context, @Body() User: User) {
        const keyUsrt = await this.keycloakUtil.creatUser({
            username: User.userName,
            password: User.password,
            emails: User.email
        });
        User.keycloakId = keyUsrt.id;
        const user = await this.userDao.create(<IUser>User);
        return json.objParse(user);
    }

    @Post('/:userId/assign-roles')
    async assignRoles(@Ctx() cxt: Context, @Param('userId') userId) {
        const data = await this.keycloakUtil.findRole();
        this.keycloakUtil.assignedRoles(userId, data);
    }
}
