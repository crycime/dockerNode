import { ethers } from "ethers";
import { context, ChainId } from "../config/index";
import * as utils from "../utils/util";
import { Open, Close, MarginTrade, PistionInfo } from "./types";
import { DexAggregator, checkTokenApprove } from "../helper/index";
import { OpenLevV1__factory } from "../../typechain";
import { Lpool } from "../lpool/index";

export class PositionManager {
    private _provider: ethers.JsonRpcProvider;
    private _contract: string;
    private _chainId: ChainId;

    protected dexAggregator: DexAggregator;
    protected lpoolDelegator: Lpool;

    public readonly leverageDecimals = 1000; // 1 digit. exp: 13.3 => 133, 100.0 => 1000
    public readonly slippageDecimals = 10000; // 2 digit. exp: 13.31 => 1331, 100.00 => 10000

    constructor(chainId: ChainId, provider: ethers.JsonRpcProvider) {
        this._chainId = chainId;
        this._contract = context[chainId].contracts.positionDelegator;
        this._provider = provider;
        this.dexAggregator = new DexAggregator(chainId, provider);
        this.lpoolDelegator = new Lpool(context[chainId].contracts.lpoolDelegator, provider);
    }

    /**
     * Caculate min output amount
     * @param isLong position type, long or short
     * @param leverage leverage rate, 1.1 - 10.0 => (110 - 1000)
     * @param slippage slippage ratio, 0.05% - 100.00% => (500 - 10000)
     */
    protected async calcMinAndBorrowAmount(
        token0: string, 
        token1: string, 
        orderInfo: Open,
    ): Promise<{borrowAmount: bigint, minBuyAmount: bigint}> {
        let borrow = BigInt(0);
        let minReceiveAmount = BigInt(0);
        let expectReceiveAmount = BigInt(0);
        const depositToken = orderInfo.depositToken ? token1 : token0;
        const isSameToken = (token0 == depositToken);
        const borrowValue = (orderInfo.deposit * (orderInfo.leverage - BigInt(1)) / BigInt(this.leverageDecimals));
        const priceData = await this.dexAggregator.getV2AvgPrice(token0, token1);
        const priceDecimals = BigInt(10) ** priceData.decimals;
        if(isSameToken){
            if(orderInfo.isLong) {
                borrow = borrowValue * priceData.price / priceDecimals;
                expectReceiveAmount = borrowValue;
            } else {
                borrow = borrowValue;
                expectReceiveAmount = (priceData.price *  (borrowValue + orderInfo.deposit)) / priceDecimals;
            }
        } else {
            if(orderInfo.isLong) {
                borrow = borrowValue;
                expectReceiveAmount = (borrowValue + orderInfo.deposit) * (BigInt(1) * priceDecimals / priceData.price) / priceDecimals;
            } else {
                borrow = borrowValue * (BigInt(1) * priceDecimals / priceData.price) / priceDecimals;
                expectReceiveAmount = borrowValue;
            }
        }

        minReceiveAmount = expectReceiveAmount * (BigInt(this.slippageDecimals) - orderInfo.slippage) / BigInt(this.slippageDecimals);
        return{borrowAmount: borrow, minBuyAmount: minReceiveAmount} ;
    };

    /**
     *  Open a position.
     */
    async openPosition(params: Open, trader: ethers.Signer) {
        /**
         * token0: means the market target token.(value: false)
         * token1: others token(value: true)
         */
        if (params == undefined || params == null) {
            throw new Error("Invalid parameter");
        }
 
        let input: MarginTrade = {
            marketId: params.marketId,
            longToken: params.isLong ? false : true,
            depositToken: params.depositToken,
            deposit: params.deposit,
            borrow: BigInt(0),
            minBuyAmount: BigInt(0)
        };
        const openevContract = OpenLevV1__factory.connect(context[this._chainId].contracts.positionDelegator, trader);
        const marketData = await openevContract.markets(params.marketId);
        const convertResult = await this.calcMinAndBorrowAmount(marketData.token0, marketData.token1, params);
        input.borrow = convertResult.borrowAmount;
        input.minBuyAmount = convertResult.minBuyAmount;

        if(params.isETH) {
            await openevContract.marginTrade.estimateGas(input, utils.PANCAKE_DEX_DATA, {value: params.deposit});
            const result = await openevContract.marginTrade(input, utils.PANCAKE_DEX_DATA, {value: params.deposit});
            console.log("open position status: ", (await result.wait(1))?.status );
            return;
        }
 
        const depositToken = params.depositToken ? marketData.token1 : marketData.token0;
        await checkTokenApprove(depositToken, await trader.getAddress(), context[this._chainId].contracts.positionDelegator, params.deposit, this._provider);
        await openevContract.marginTrade.estimateGas(input, utils.PANCAKE_DEX_DATA);
        const result = await openevContract.marginTrade(input, utils.PANCAKE_DEX_DATA);
        console.log("open position status: ", (await result.wait(1))?.status );
    }

    /**
     *  Close a position.
     */
    async closePosition(params: Close, owner: ethers.Signer) {
        if (params == undefined || params == null) {
            throw new Error("Invalid parameter");
        }

        const longToken = params.isLong ? false : true;
        const openevContract = OpenLevV1__factory.connect(context[this._chainId].contracts.positionDelegator, owner);
        const tradeBefore = await openevContract.activeTrades(await owner.getAddress(), params.marketId, longToken);
        if(tradeBefore.held < params.closeHeld) {
            throw new Error("The liquidation amount cannot be greater than the position amount");
        }

        await openevContract.closeTrade.estimateGas(params.marketId, longToken, params.closeHeld, params.minOrMaxAmount, utils.PANCAKE_DEX_DATA);
        const result = await openevContract.closeTrade(params.marketId, longToken, params.closeHeld, params.minOrMaxAmount, utils.PANCAKE_DEX_DATA);
        console.log("close position status: ", (await result.wait(1))?.status );
    }

    /**
     *  Payoff a position.
     *  @param isLong of the position direction.(false means short position)
     */
    async payOff(marketId: number, isLong: boolean, owner: ethers.Signer) {
        const longToken = isLong ? false : true;
        const openevContract = OpenLevV1__factory.connect(context[this._chainId].contracts.positionDelegator, owner);
        await openevContract.payoffTrade.estimateGas(marketId, longToken);
        const result = await openevContract.payoffTrade(marketId, longToken);
        console.log("payOff trade status: ", (await result.wait(1))?.status );
    }

    /**
     *  Liquidation.
     *  @param target of the position owner
     *  @param isLong of the position direction.(false means short position)
     */
    async liquidation(target: string, marketId: number, isLong: boolean, liquidator: ethers.Signer) {
        const longToken = isLong ? false : true;
        const openevContract = OpenLevV1__factory.connect(context[this._chainId].contracts.lpoolDelegator, liquidator);
        const marketData = await openevContract.markets(marketId);
        const borrowedToken = isLong ? marketData.token1 : marketData.token0;
        const pool = isLong ? marketData.pool1 : marketData.pool0;
        const borrowInfo = await this.lpoolDelegator.borrowerDetail(marketId, pool, await liquidator.getAddress());
        await checkTokenApprove(borrowedToken, await liquidator.getAddress(), context[this._chainId].contracts.lpoolDelegator, borrowInfo.total, this._provider);
        const result = await openevContract.liquidate(target, marketId, longToken, utils.UNISWAPV2_DEX_DATA);
        console.log("liquidation status: ", (await result.wait(1))?.status );
    }

    /**
     *  Get a position info.
     *  @param target of the position owner.
     *  @param isLong of the position direction.(false means short position)
     */
    async getPositionInfo(target: string, marketId: number, isLong: boolean): Promise<PistionInfo> {
        const longToken = isLong ? false : true;
        const openevContract = OpenLevV1__factory.connect(context[this._chainId].contracts.lpoolDelegator, this._provider);
        const position = await openevContract.activeTrades(target, marketId, longToken);
        return position;
    }
};
