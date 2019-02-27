/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2019/1/20
 * Time: 16:04
 *
 */
import server from './server'

(async ()=>{
  try {
    //创建服务
    await server.init()
  }catch (e) {
    console.error(e)
  }
})()