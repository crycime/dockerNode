/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import Keycloak from 'keycloak-koa-connect';
import bodyStore from 'keycloak-koa-connect/stores/body-store';
import queryStore from 'keycloak-koa-connect/stores/query-store';
import * as keycloak from '../config/keycloak.json';

const guard = new Keycloak({ store: [queryStore, bodyStore] }, keycloak);

// 检查角色
function checkRole(role?: string | string[]) {
    return async (ctx, next) => {
        await guard.protect()(ctx, next);
    };
}

export default guard;
export { checkRole };
