import { BigNumberish, ethers} from "ethers";

export type Open = {
    isETH: boolean;
    marketId: number;
    isLong: boolean;
    depositToken: boolean; //token0: false, token1: true
    deposit: bigint;
    leverage: bigint;
    slippage: bigint;
};

export type Close = {
    marketId: number;
    isLong: boolean; //token0: false, token1: true
    closeHeld: bigint;
    minOrMaxAmount: bigint;
};

export type MarginTrade = {
    marketId: number;
    longToken: boolean; //token0: false, token1: true
    depositToken: boolean; //token0: false, token1: true
    deposit: bigint;
    borrow: bigint;
    minBuyAmount: bigint;
};

export type PistionInfo = {
    deposited: bigint;
    held: bigint;
    depositToken: boolean;
    lastBlockNum: bigint;
    heldRelativeBorrowed: bigint;
};

export type Order = {
    salt: string;
    owner: string;
    deadline: number; // in seconds
    marketId: number;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: string;
    price0: string; // tokanA-tokenB pair, the price of tokenA relative to tokenB, scale 10**24.
}

export type OpenOrder = {
    salt: string;
    owner: string;
    deadline: number; // in seconds
    marketId: number;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: string;
    price0: string;
    deposit: string; // the deposit amount for margin trade.
    borrow: string; // the borrow amount for margin trade.
    expectHeld: string; // the minimum position held after the order gets fully filled.
}

export type CloseOrder = {
    salt: string;
    owner: string;
    deadline: number;
    marketId: number;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: string;
    price0: string;
    isStopLoss: boolean; // true = stopLoss, false = takeProfit.
    closeHeld: string; // how many position will be closed.
    expectReturn: string; // the minimum deposit returns after gets filled.
}


export type CloseTradeAndCancelOrder = {
    marketId: number;
    longToken: boolean; //token0: false, token1: true
    closeHeld: string;
    minOrMaxAmount: string;
    orders : Order[];
};
