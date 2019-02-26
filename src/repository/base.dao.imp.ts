/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/19
 * Time: 17:28
 *
 */

export default interface IDAO<T> {
  findAll: ()=> void;
  findById: (id: string) => void;
  create: (item:T) => void;
  updateById:(_id: string, item:T) => void ;
  delete: (_id: string) => void;
}

