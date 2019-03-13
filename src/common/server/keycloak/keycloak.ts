/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/3/4
 * Time: 21:53
 *
 */

import { autobind } from 'core-decorators';
import { IKeycloakConfig } from '../../config/index';
import { APIError } from '../../helpers/error';
import base, { content_type, request_type } from './base';

export default class keycloakUtil extends base {
    constructor(data?: IKeycloakConfig) {
        super(data);
    }

    @autobind
    public async getToken({ username, password }: { username: string; password: string }) {
        const response = await this.requestToken({
            accessRealm: this.config.realmName,
            baseUrl: this.config.baseUrl,
            username: username,
            password: password,
            grant_type: this.config.grant_type,
            client_id: this.config.client_id
        });
        return response;
    }

    @autobind
    public async creatUser(options: { username: string; password: string; emails?: string }) {
        try {
            const client = await this.getClient();
            const keyUser = await client.users.create(this.config.realmName, {
                // 创建用户
                attributes: {},
                email: options.emails,
                emailVerified: '',
                enabled: true,
                username: options.username
            });
            await this.client.users.resetPassword(this.config.realmName, keyUser.id, {
                // 重置密码
                temporary: false,
                type: 'password',
                value: options.password
            });
            return keyUser;
        } catch (e) {
            throw new APIError(e.errorMessage ? e.errorMessage : e);
        }
    }

    @autobind
    public async assignedRoles(userId, data) {
        const url = `${this.config.baseUrl}/admin/realms/${
            this.config.realmName
        }/users/${userId}/role-mappings/clients/${this.config.clientSecret}`;
        const response = await this.request(url, data, { method: request_type.POST, contentType: content_type.JSON });
        return response;
    }

    @autobind
    public async findRole(roleName?: string): Promise<any> {
        const client = await this.getClient();
        const data = await client.clients.roles.find(this.config.realmName, this.config.clientSecret, roleName);
        return data;
    }

    @autobind
    public async findUserRole(userId) {
        const url = `${this.config.baseUrl}/admin/realms/${
            this.config.realmName
        }/users/${userId}/role-mappings/clients/${this.config.clientSecret}`;
        const response = await this.request(url, null, { method: request_type.GET, contentType: content_type.JSON });
        return response;
    }
}

(async () => {
    try {
        const y = new keycloakUtil();
        const dd = await y.findRole();
        const data = await y.getToken({
            username: 'crycime',
            password: '111111'
        });
        console.log(data.access_token);
    } catch (e) {
        console.error(e);
    }
})();
