import { ethers } from "ethers";
import { DexPrice, SwapVars, CalTransAmountInput } from "./types";
import { BscDexAggregatorV1__factory, EthDexAggregatorV1__factory } from "../../typechain";
import { context, ChainId } from "../config/index";
import * as utils from "../utils/util";
export class DexAggregator {
    private _chainId: ChainId;
    private _provider: ethers.JsonRpcProvider;

    private _defaultInterval = 60;

    /**
     *  @param address of the DexAggretor delegator contract address.
     */
    constructor(chainId: ChainId, provider: any) {
        this._chainId = chainId;
        this._provider = provider;
    }

    /**
     * Get current price.
     * @param address contract address.
     * @param desToken target token.
     * @param quoteToken base token.
     * 
     */
    async getV2AvgPrice(desToken: string, quoteToken: string, secondsAgo?: number): Promise<DexPrice> {
        const hTime = secondsAgo ? secondsAgo : this._defaultInterval;
        switch(this._chainId) {
            case ChainId.BSC:
            case ChainId.BSC_TESTNET:
                const dexBscAggContract = BscDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator, this._provider);
                return await dexBscAggContract.getPriceCAvgPriceHAvgPrice(desToken, quoteToken, hTime, utils.PANCAKE_DEX_DATA);
            default:
                const dexEthAggContract = EthDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator, this._provider);
                return await dexEthAggContract.getPriceCAvgPriceHAvgPrice(desToken, quoteToken, hTime, utils.UNISWAPV2_DEX_DATA);
        }
    }

    /**
     *  Query average price from UniSwapV3
     *  @param desToken target token.
     *  @param quoteToken base token.
     */
    async getV3AvgPrice(desToken: string, quoteToken: string, secondsAgo?: number): Promise<DexPrice> {
        const hTime = secondsAgo ? secondsAgo : this._defaultInterval;
        switch(this._chainId) {
            case ChainId.BSC:
            case ChainId.BSC_TESTNET:
                const dexBscAggContract = BscDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator);
                return await dexBscAggContract.getPriceCAvgPriceHAvgPrice(desToken, quoteToken, hTime, utils.UNISWAPV3_DEX_DATA);
            default:
                const dexEthAggContract = EthDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator);
                return await dexEthAggContract.getPriceCAvgPriceHAvgPrice(desToken, quoteToken, hTime, utils.UNISWAPV3_DEX_DATA);
        }
    }

    /**
     *  Do swap
     *  @param data do swap parameter.
     *  @param address of the DexAggretor delegator contract address.
     */
    async swap(data: SwapVars) {
        switch(this._chainId) {
            case ChainId.BSC:
            case ChainId.BSC_TESTNET:
                const dexBscAggContract = BscDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator);
                await dexBscAggContract.sell(data.buyToken, data.sellToken, data.sellAmount, data.minBuyAmount, utils.UNISWAPV2_DEX_DATA);
            default:
                const dexEthAggContract = EthDexAggregatorV1__factory.connect(context[this._chainId].contracts.dexAggDelegator);
                await dexEthAggContract.sell(data.buyToken, data.sellToken, data.sellAmount, data.minBuyAmount, utils.UNISWAPV2_DEX_DATA);
                
        }
        return true;
    }

    async calBuyAmount({buyToken, sellToken, buyTax, sellTax, sellAmount, dexData}: CalTransAmountInput): Promise<bigint> {
        /**
         * todo
         */
        let amount = BigInt(0);
        return amount;
    }

    async calSellAmount({buyToken, sellToken, buyTax, sellTax, sellAmount, dexData}: CalTransAmountInput): Promise<bigint> {
        /**
         * todo
         */
        let amount = BigInt(0);
        return amount;
    }
};