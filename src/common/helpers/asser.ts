import { Context } from 'koa';

/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/13
 * Time: 18:38
 *
 */

function isContext(pet: any): pet is Context { //magic happens here
  return 'method' in pet && 'url' in pet;
}

export { isContext };