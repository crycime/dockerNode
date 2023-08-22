import { ChainId } from "../pkg/config/index"

export type MockTokenPair = {
    token0: string;
    token1: string;
};

export const mockTokens: Record<ChainId, MockTokenPair> = {
    [ChainId.MAINNET]: {
        token0: '0x47753714a464f2Cb4948cCA4D72A274fD22d2C4e', //TokenA
        token1: '0xFF4d283ed0Ac50f3dB26C7b22E183E8Ba2F8f770', //TokenB
    },
    [ChainId.POLYGON]: {
        token0: '',
        token1: '',
    },
    [ChainId.BSC]: {
        token0: '0x47753714a464f2Cb4948cCA4D72A274fD22d2C4e', //TokenA
        token1: '0xFF4d283ed0Ac50f3dB26C7b22E183E8Ba2F8f770', //TokenB
    },
    [ChainId.BSC_TESTNET]: {
        token0: '',
        token1: '',
    },
    [ChainId.ARBITRUM]: {
        token0: '',
        token1: '',
    },
    [ChainId.ARBITRUM_TESTNET]: {
        token0: '0xBE4e3647091F3136254Ea93800D3e948f35af8a6', 
        token1: '0x89955A574B45b40eaB590c22E1187dfb9626F6bD',
    },
};