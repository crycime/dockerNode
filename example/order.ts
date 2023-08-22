import { ethers } from "ethers";
import { BigNumberish} from "ethers";
import { toWei, UNISWAPV2_DEX_DATA } from "../pkg/utils/util";
import { OpenLevV1__factory, MockERC20__factory, DexAggregatorDelegator__factory } from "../typechain";
import { context, ChainId } from "../pkg/config/index";
import { DexAggregator } from "../pkg/helper/index";
import { ControllerV1, } from "../pkg/controller/index";
import { PositionManager, Open, Close,LimitOrder,OpenOrder, CloseOrder,CloseTradeAndCancelOrder ,Order} from "../pkg/position/index";
import { tokenApprove } from "./support";
import { mockTokens } from "./const";
import { OPLimitOrder__factory,DexAggregatorInterface__factory,OpenLevInterface__factory } from "../typechain/limitOrder";


/**
 * this example is only for open a long position.
 * @param chainId 
 */
async function orderExample(chainId: ChainId) {
    const MARKET = 0;
    let deposit = '';

    const provider = new ethers.JsonRpcProvider(context[chainId].network.rpcUrl);
    const trader = new ethers.Wallet("------YOUR PRIVKEY------", provider);
    const positionContract = OpenLevV1__factory.connect(context[chainId].contracts.positionDelegator, provider);
    const marketData = await positionContract.markets(MARKET);
    deposit = marketData.token0;
    const postionManger = new PositionManager(chainId, provider);
    let positionParam: Open = {
        isETH: false,
        marketId: MARKET,
        isLong: true,
        depositToken: deposit == marketData.token0 ? false : true, //token0:false, token1: true
        deposit: toWei(1),    //deposit amount
        leverage: BigInt(2),  //2 times
        slippage: BigInt(500) //0.05%
    };
    await tokenApprove(mockTokens[chainId].token0, context[chainId].contracts.positionDelegator, toWei(1000), trader);
    await tokenApprove(mockTokens[chainId].token1, context[chainId].contracts.positionDelegator, toWei(1000), trader);
    
    await postionManger.openPosition(positionParam, trader);

    let closeParam: Close = {
        marketId: MARKET,
        isLong: true,
        closeHeld: BigInt('50000000000000000'),
        minOrMaxAmount: BigInt('60000000000000000'),
    };
    await postionManger.closePosition(closeParam, trader);

    await postionManger.payOff(MARKET, true, trader);
};


async function limitorderExample(chainId: ChainId) {
    const provider = new ethers.JsonRpcProvider(context[chainId].network.rpcUrl);
    const trader = new ethers.Wallet("------YOUR PRIVKEY------", provider);
    const bot = new ethers.Wallet("------YOUR PRIVKEY------", provider);

    const dexAgg = new DexAggregator(chainId, provider);
    const postionManger = new LimitOrder(chainId, provider);

    await tokenApprove(mockTokens[chainId].token0, context[chainId].contracts.limitOrderDelegator, toWei(1000), trader);
    await tokenApprove(mockTokens[chainId].token1, context[chainId].contracts.limitOrderDelegator, toWei(1000), trader);
    await tokenApprove(context[chainId].contracts.ole, context[chainId].contracts.limitOrderDelegator, toWei(1000), trader);
   // =========================   open limit order   ==============================
   
    const beforepriceVar = await dexAgg.getV2AvgPrice(mockTokens[chainId].token0, mockTokens[chainId].token1, 10)
    const openOrderParam: OpenOrder = {
        salt: "1",
        owner: trader.address,
        deadline: 1722586867, // in seconds
        marketId:0,
        longToken: true,
        depositToken: true,
        commissionToken: context[chainId].contracts.ole,
        commission: "100000000000000000",
        price0: beforepriceVar.price.toString(),
        deposit: "1000000000000000000",// the deposit amount for margin trade.
        borrow:     "1000000000000000000", // the borrow amount for margin trade.
        expectHeld: "600000000000000000", //
    };

    const openOrderSignature = await postionManger.genOpenOrderSignature(openOrderParam , trader.privateKey.slice(2))
    await postionManger.fillOpenOrder(openOrderParam,openOrderSignature,BigInt(800000000000000000),bot)


    // =========================  close Trade And Cancel   ==========================
    const priceVar = await dexAgg.getV2AvgPrice(mockTokens[chainId].token0, mockTokens[chainId].token1, 10)
    const orders : Order[] = [
        {
            salt: "1",
            owner: trader.address,
            deadline: 1722586867, // in seconds
            marketId:0,
            longToken: true,
            depositToken: true,
            commissionToken: context[chainId].contracts.ole,
            commission: "100000000000000000",
            price0: priceVar.price.toString(),
        }
      ];
    const params: CloseTradeAndCancelOrder = {
        marketId:0,
        longToken: true,
        closeHeld :"50000000000000000",
        minOrMaxAmount: "40000000000000000",
        orders : orders
    };

    await postionManger.closeTradeAndCancel(params,trader)

    // =========================   close limit order   ==============================
    const afterpriceVar = await dexAgg.getV2AvgPrice(mockTokens[chainId].token0, mockTokens[chainId].token1, 10)
    const closeOrderParam: CloseOrder = {
        salt: "1",
        owner: trader.address,
        deadline: 1722586867, // in seconds
        marketId: 0,
        longToken: true,
        depositToken: true,
        commissionToken: context[chainId].contracts.ole,
        commission: "100000000000000000",
        price0: afterpriceVar.price.toString(),
        isStopLoss: false,// the deposit amount for margin trade.
        closeHeld: "1000000000000000000", // the borrow amount for margin trade.
        expectReturn: "40000000000000000", //
    };
    const closeOrderSignature = await postionManger.genCloseOrderSignature(closeOrderParam , trader.privateKey.slice(2))
    console.log("closeOrderSignature:",closeOrderSignature)
    await postionManger.fillCloseOrder(closeOrderParam,closeOrderSignature,BigInt(500000000000000000),bot)
};

orderExample(ChainId.BSC_TESTNET).then().catch((e) => {
    console.error(e);
});

limitorderExample(ChainId.BSC_TESTNET).then().catch((e) => {
    console.error(e);
});