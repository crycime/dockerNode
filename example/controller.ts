import { ethers } from "ethers";
import { UNISWAPV2_DEX_DATA } from "../pkg/utils/util";
import { context, ChainId } from "../pkg/config/index";
import { ControllerV1} from "../pkg/controller/index";
import { mockTokens } from "./const";

async function createMarketExample(chainId: ChainId) {
    const provider = new ethers.JsonRpcProvider(context[chainId].network.rpcUrl);
    const admin = new ethers.Wallet("------YOUR PRIVKEY------", provider);
    const controller = new ControllerV1(context[chainId].contracts.controllerV1Delegator, provider);
    const marketCreated = await controller.createMarket(mockTokens[chainId].token0, mockTokens[chainId].token1, BigInt(3000), UNISWAPV2_DEX_DATA, admin);
    console.log(`create market success, pool0: ${marketCreated.pool0}, pool1: ${marketCreated.pool1}`);
}

createMarketExample(ChainId.BSC_TESTNET).then().catch((e) => {
    console.error(e);
});
