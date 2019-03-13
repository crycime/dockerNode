/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/3/6
 * Time: 19:59
 *
 */
import { APIError } from '../helpers/error';

let methodErr = () => {
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = async (...args) => {
            let ret;
            try {
                ret = await method.apply(target, args);
            } catch (error) {
                console.log('error', error);
                throw new APIError(error);
            }
            return ret;
        };
    };
};

export { methodErr };
