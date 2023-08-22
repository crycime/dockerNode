import { ChainId } from "../config/index";
import { PANCAKE_DEX_DATA, UNISWAPV2_DEX_DATA, UNISWAPV3_DEX_DATA } from "./util";

export async function genDexData(chainId: ChainId): Promise<string> {
    switch(chainId) {
        case ChainId.BSC:
        case ChainId.BSC_TESTNET:
            return PANCAKE_DEX_DATA;
        case ChainId.ARBITRUM:
        case ChainId.ARBITRUM_TESTNET:
            return UNISWAPV2_DEX_DATA;
        default:
            return UNISWAPV3_DEX_DATA;
    }
}

