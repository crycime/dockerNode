/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 14:56
 *
 */
import * as BlurBird from 'bluebird';
import IBaseConfig, { IKeycloakConfig, IMongodbConfig, RUNTIME } from './base';

const mongodb: IMongodbConfig = {
    uri: 'mongodb://localhost:27017/data3',
    option: {
        poolSize: 10,
        useCreateIndex: true,
        // user: 'ptahuser',
        // pass: 'Ptah@6cF0d',
        ssl: null,
        useNewUrlParser: true,
        promiseLibrary: BlurBird
    }
};

const keycloak: IKeycloakConfig = {
    baseUrl: 'http://176.122.187.48:8080/auth',
    username: 'admin',
    password: 'admin',
    grant_type: 'password',
    realmName: 'ptah',
    clientSecret: 'd3e1c034-d238-4eef-9ace-d0ddd6a1f8b7',
    client_id: 'admin-cli'
};

const develop: IBaseConfig = {
    keycloak,
    port: 3000,
    runtime: RUNTIME.DEVELOPER,
    mongodb
};
export default develop;
