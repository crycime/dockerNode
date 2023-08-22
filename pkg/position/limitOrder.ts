import {ethers } from "ethers";
import { context, ChainId } from "../config/index";
import { genDexData,buildOpenOrderData, buildCloseOrderData} from "../utils/index";
import { Open,OpenOrder, Close, MarginTrade, PistionInfo, CloseOrder,CloseTradeAndCancelOrder, Order } from "./types";
import { DexAggregator, checkTokenApprove } from "../helper/index";
import { OPLimitOrder__factory,OpenLevInterface__factory} from "../../typechain/limitOrder";
import * as ethSigUtil from "eth-sig-util";


export class LimitOrder {
    private _provider: ethers.JsonRpcProvider;
    private _chainId: ChainId;
    private _contract: string;

    constructor(chainId: ChainId, provider: ethers.JsonRpcProvider) {
        this._chainId = chainId;
        this._contract = context[chainId].contracts.limitOrderDelegator;
        this._provider = provider;
    }

    
/**
     *  Open a fillOpenOrder.
     * fillingDeposit is fill amount
     */
async fillOpenOrder(params: OpenOrder , signature:string,fillingDeposit:bigint,bot: ethers.Signer) {
    if (params == undefined || params == null || signature ==undefined || signature == null) {
        throw new Error("Invalid parameter");
    }
    const oPLimitOrderContract = OPLimitOrder__factory.connect(context[this._chainId].contracts.limitOrderDelegator, bot);
    const dexData = await genDexData(this._chainId);

    await oPLimitOrderContract.fillOpenOrder.estimateGas(params, signature,fillingDeposit,dexData);
    const result = await oPLimitOrderContract.fillOpenOrder(params, signature,fillingDeposit,dexData);
    console.log("fill open order status: ", (await result.wait(1))?.status );
}


async fillCloseOrder(params: CloseOrder , signature:string,fillingDeposit:bigint,bot: ethers.Signer) {
    if (params == undefined || params == null || signature ==undefined || signature == null) {
        throw new Error("Invalid parameter");
    }
    const oPLimitOrderContract = OPLimitOrder__factory.connect(context[this._chainId].contracts.limitOrderDelegator, bot);
    const dexData = await genDexData(this._chainId);

    await oPLimitOrderContract.fillCloseOrder.estimateGas(params, signature,fillingDeposit,dexData);
    const result = await oPLimitOrderContract.fillCloseOrder(params, signature,fillingDeposit,dexData);
    console.log("fill close order status: ", (await result.wait(1))?.status );
}

async closeTradeAndCancel(params: CloseTradeAndCancelOrder, trader: ethers.Signer) {
    if (params == undefined || params == null ) {
        throw new Error("Invalid parameter");
    }
    const dexData  = await genDexData(this._chainId);
    const oPLimitOrderContract = OPLimitOrder__factory.connect(context[this._chainId].contracts.limitOrderDelegator, trader);
    await oPLimitOrderContract.closeTradeAndCancel.estimateGas(params.marketId,params.longToken,params.closeHeld,params.minOrMaxAmount,dexData,params.orders);
    const result = await oPLimitOrderContract.closeTradeAndCancel(params.marketId,params.longToken,params.closeHeld,params.minOrMaxAmount,dexData,params.orders);
    console.log("close trade and cancel status: ", (await result.wait(1))?.status );
}

async cancelOrder(params: Order, trader: ethers.Signer) {
    if (params == undefined || params == null ) {
        throw new Error("Invalid parameter");
    }
    const oPLimitOrderContract = OPLimitOrder__factory.connect(context[this._chainId].contracts.limitOrderDelegator, trader);
    await oPLimitOrderContract.cancelOrder.estimateGas(params);
    const result = await oPLimitOrderContract.cancelOrder(params);
    console.log("cancel order status: ", (await result.wait(1))?.status );
}

async cancelOrders(params: Order[], trader: ethers.Signer) {
    if (params == undefined || params == null ) {
        throw new Error("Invalid parameter");
    }
    const oPLimitOrderContract = OPLimitOrder__factory.connect(context[this._chainId].contracts.limitOrderDelegator, trader);
    await oPLimitOrderContract.cancelOrders.estimateGas(params);
    const result = await oPLimitOrderContract.cancelOrders(params);
    console.log("cancel orders status: ", (await result.wait(1))?.status );
}

async genOpenOrderSignature(params: OpenOrder, privatekey: String): Promise<string> {
    if (params == undefined || params == null ) {
        throw new Error("Invalid parameter");
    }
    const data = buildOpenOrderData(Number(this._chainId), context[this._chainId].contracts.limitOrderDelegator, params);

    let hash = ethSigUtil.TypedDataUtils.sign(data as any).toString('hex');
    console.log("hash:",hash)

    return ethSigUtil.signTypedMessage(Buffer.from(privatekey, 'hex'), {data: data as any});
}

async genCloseOrderSignature(params: CloseOrder, privatekey: String): Promise<string> {
    if (params == undefined || params == null ) {
        throw new Error("Invalid parameter");
    }
    const data = buildCloseOrderData(Number(this._chainId), context[this._chainId].contracts.limitOrderDelegator, params);
    return ethSigUtil.signTypedMessage(Buffer.from(privatekey, 'hex'), {data: data as any});
}
};