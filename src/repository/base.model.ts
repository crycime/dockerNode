import { validate } from 'class-validator';
import { autobind } from 'core-decorators';

/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/2/20
 * Time: 16:46
 *
 */

export default abstract class BaseModel<T> {

  abstract _id:any;

  @autobind
  public async validate(){
    const errors=await validate(this,{ validationError: { target: false } ,skipMissingProperties:true})
    if (errors.length > 0) {
      throw  errors
    }
  }
}