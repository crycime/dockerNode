import { ethers } from "ethers";
import { context, ChainId } from "../pkg/config/index";
import { OpenLevV1__factory } from "../typechain";
import { Lpool } from "../pkg/lpool/index";
import { mockTokens } from "./const";
import { toWei } from "../pkg/utils/util";
import { tokenApprove } from "./support";

async function lpoolExample(chainId: ChainId) {
    const MARKET = 0; 
    const provider = new ethers.JsonRpcProvider(context[chainId].network.rpcUrl);
    const depositor = new ethers.Wallet("------YOUR PRIVKEY------", provider);

    const positionContract = OpenLevV1__factory.connect(context[chainId].contracts.positionDelegator, provider);
    const marketData = await positionContract.markets(MARKET);

    await tokenApprove(mockTokens[chainId].token0, marketData.pool0, toWei(1000), depositor);
    await tokenApprove(mockTokens[chainId].token1, marketData.pool1, toWei(1000), depositor);

    const lpool = new Lpool(context[chainId].contracts.lpoolDelegator, provider);
    await lpool.deposit(marketData.pool0, toWei(10), depositor);
    await lpool.deposit(marketData.pool1, toWei(10), depositor);

    await lpool.redeem(MARKET, marketData.pool0, toWei(8), depositor);
    await lpool.redeem(MARKET, marketData.pool1, toWei(8), depositor);
}

lpoolExample(ChainId.BSC_TESTNET).then().catch((e) => {
    console.error(e);
});
