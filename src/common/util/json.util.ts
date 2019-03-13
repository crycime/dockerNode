/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/3/2
 * Time: 14:45
 *
 */

// objParse
export default class util {
    static objParse(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}
