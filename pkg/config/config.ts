
export enum ChainId {
    // Ethereum
    MAINNET = 1,

    // Polygon
    POLYGON = 137,

    // Arbitrum One
    ARBITRUM = 42161,
    ARBITRUM_TESTNET = 421611,

    // BSC
    BSC = 56,
    BSC_TESTNET = 97,
}

export interface UdexConfig {
    network: Network;
    contracts: Contract;
};

export type Network = {
    rpcUrl: string;
};

export type Contract = {
    timeLock: string;
    ole: string;
    positionDelegator: string;
    lpoolDelegator: string;
    xoleDelegator: string;
    dexAggDelegator: string;
    queryHelper: string;
    batchQueryHelper: string;
    controllerV1Delegator: string;
    limitOrderDelegator: string;
}

export const context: Record<ChainId, UdexConfig> = {
    [ChainId.MAINNET]: {
        network: {
            rpcUrl: '',
        },
        contracts: {
            timeLock: '',
            ole: '',
            positionDelegator: '',
            lpoolDelegator: '',
            xoleDelegator: '',
            dexAggDelegator: '',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '',
            limitOrderDelegator: '',
        }
    },
    [ChainId.POLYGON]: {
        network: {
            rpcUrl: '',
        },
        contracts: {
            timeLock: '',
            ole: '',
            positionDelegator: '',
            lpoolDelegator: '',
            xoleDelegator: '',
            dexAggDelegator: '',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '',
            limitOrderDelegator: '',
        }
    },
    [ChainId.BSC]: {
        network: {
            rpcUrl: '',
        },
        contracts: {
            timeLock: '',
            ole: '',
            positionDelegator: '',
            lpoolDelegator: '',
            xoleDelegator: '',
            dexAggDelegator: '',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '',
            limitOrderDelegator: '',
        }
    },
    [ChainId.BSC_TESTNET]: {
        network: {
            rpcUrl: 'https://bsc-testnet.publicnode.com',
        },
        contracts: {
            timeLock: '0x860D036Ab58A2a7B7F5175B7fED29A16FD34D758',
            ole: '0x8F66Dbd3506dDc5fD749551b5d6D96538e007f25',
            positionDelegator: '0x71f2AD9F30a5A04608418EaFda3B76163a7dA4b5',
            lpoolDelegator: '0x18d71F75e59b5F774bf96EF549F480fAFF9d14D4',
            xoleDelegator: '0x303c0F842702D02c5c25790fBD9089d7d73a7fDF',
            dexAggDelegator: '0xa20e4f8d8787CeDca66eE46ca16655Dc471a89Aa',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '0x7346D4093E4B6261C1BF03d9Be22fFEFEAfef180',
            limitOrderDelegator: '0xA2817E12362e84AB70E66fCB79dB188d46c23aa0',
        }
    },
    [ChainId.ARBITRUM]: {
        network: {
            rpcUrl: '',
        },
        contracts: {
            timeLock: '',
            ole: '',
            positionDelegator: '',
            lpoolDelegator: '',
            xoleDelegator: '',
            dexAggDelegator: '',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '',
            limitOrderDelegator: '',
        }
    },
    [ChainId.ARBITRUM_TESTNET]: {
        network: {
            rpcUrl: 'https://arbitrum-goerli.publicnode.com',
        },
        contracts: {
            timeLock: '0x3Fc027478c625ac47E46B63dbB961B0A956F8Ab3',
            ole: '0x5e631A77E04fb38F5Ab6e83B5616718dC4Ceca7B',
            positionDelegator: '0x791C8ECf9dEF90FF3c059D11d5cBd828ae46c7B0',
            lpoolDelegator: '0x22E4E4ffbeBd44e12Ec2e538e580b21063cB830b',
            xoleDelegator: '0xCc2c5456CD2d19E4521df2071AaCDFB8BB48ad80',
            dexAggDelegator: '0xE5B7f03363CE9CbD393F178F1cB6B5584386b0CC',
            queryHelper: '',
            batchQueryHelper: '',
            controllerV1Delegator: '0xB71A7B3FD8cc9fbFEC84DAEC3CA537b0d4b6c6E1',
            limitOrderDelegator: '0xA2817E12362e84AB70E66fCB79dB188d46c23aa0',
        }
    },
};