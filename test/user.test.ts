import { UserDAO } from '../src/components/user/dao/index';
import 'mocha';
describe('User DAO层测试', function() {
    it('用例1', async function() {
        const dao = new UserDAO();
        const y = await dao.findAll();
        return true;
    });
});
