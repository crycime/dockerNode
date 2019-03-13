/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 14:56
 *
 */

enum RUNTIME {
    LOCALHOST = 'localhost',
    TEST = 'test',
    DEVELOPER = 'develop',
    PRODUCTION = 'prod'
}

interface IMongodbConfig {
    readonly uri: string; // 数据库地址
    readonly option: {
        // 数据库选项
        readonly poolSize: number; // 连接池选项
        // readonly user: string; // 数据库帐号
        // readonly pass: string; // 数据库密码
        readonly ssl: boolean; // 是否使用 ssl
        useNewUrlParser: true;
        [propNmae: string]: any;
    };
}

interface IKeycloakConfig {
    readonly baseUrl: string;
    readonly username: string;
    readonly password: string;
    readonly grant_type: string;
    readonly client_id: string;
    readonly clientSecret: string;
    readonly realmName: string;
}

interface IBaseConfig {
    readonly port: number;
    readonly runtime: RUNTIME;
    readonly keycloak: IKeycloakConfig;
    readonly mongodb: IMongodbConfig;
}

export default IBaseConfig;
export { IMongodbConfig, RUNTIME, IKeycloakConfig };
