import { UserDAO } from './dao'
import 'mocha';
describe('随即生成数组测试', function () {
  it('用例1', async function () {
    const dao=new UserDAO()
    const y=await dao.findAll()
    return true;
  })
})
