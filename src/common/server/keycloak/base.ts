/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/3/6
 * Time: 14:16
 *
 */

/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/3/4
 * Time: 21:53
 *
 */

import { autobind } from 'core-decorators';
import * as request from 'superagent';
import config, { IKeycloakConfig } from '../../config/index';
import * as adminClient from 'keycloak-admin-client';

enum request_type {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

enum content_type {
    FORM = 'form',
    JSON = 'json'
}

export default abstract class keycloakBase {
    protected config: IKeycloakConfig;
    protected accessToken: string;
    protected client: any;

    constructor(data: IKeycloakConfig = config.keycloak) {
        this.config = data;
    }

    @autobind
    public async getClient() {
        if (!this.client) {
            this.client = await adminClient({
                baseUrl: this.config.baseUrl,
                username: this.config.username,
                password: this.config.password,
                grant_type: this.config.grant_type,
                client_id: this.config.client_id
            });
        }
        return this.client;
    }

    @autobind
    public async requestToken(param?: {
        accessRealm?: string;
        baseUrl: string;
        username: string;
        password: string;
        grant_type: string;
        client_id: string;
    }) {
        let data = param;
        if (!data) {
            data = this.config;
        }
        // 获取的 token 默认是 master 这个 realm 的
        const url = `${data.baseUrl}/realms/${data.accessRealm || 'master'}/protocol/openid-connect/token`;
        const response = await request
            .post(url)
            .send({
                username: data.username,
                password: data.password,
                grant_type: data.grant_type,
                client_id: data.client_id
            })
            .type('form')
            .accept('json');
        if (response.ok) {
            this.accessToken = response.body.access_token;
            return response.body;
        }
        throw response;
    }

    @autobind
    public async request(
        url: string,
        data: object = {},
        {
            method = request_type.GET,
            contentType = content_type.FORM,
            isRefreshToken = true
        }: {
            isRefreshToken?: boolean;
            contentType?: content_type;
            method?: request_type;
        }
    ) {
        const uri = url.startsWith('http') ? url : this.config.baseUrl + url;
        let req = request(method, uri.replace(/@REALM/g, this.config.realmName)).accept('json');
        if (contentType) {
            req = req.type(contentType);
        }
        if (method === request_type.GET) {
            req = req.query(data);
        } else {
            req = req.send(data);
        }

        if (!this.accessToken) {
            await this.requestToken();
        }
        req = req.set({ Authorization: `Bearer ${this.accessToken}` });

        const response = await req;
        // 如果返回状态码为401,说明 token 失效,刷新 token 后,重新请求一次.但是,重新调用时,isRefreshToken为 false,防止获取到的 token 有问题时陷入死循环
        if (isRefreshToken && response.status === 401) {
            await this.requestToken();
            return this.request(url, data, {
                method,
                contentType,
                isRefreshToken: false
            });
        } else if (response.ok) {
            return response.body;
        }
        throw response;
    }
}

export { request_type, content_type };
