export type MarketData = {
    pool0: string;
    pool1: string;
    token0: string;
    token1: string;
    marginLimit: bigint;
    feesRate: bigint;
    priceDiffientRatio: bigint;
    priceUpdater: string;
    pool0Insurance: bigint;
    pool1Insurance: bigint;
    dexs: bigint[];
};

export type SwapVars = {
    router?: string; //swap router address(now support: 1inchV5)
    payee: string;
    buyToken: string;
    sellToken: string;
    sellAmount: bigint;
    minBuyAmount: bigint;
    data: string;
};

export type CalTransAmountInput = {
    buyToken: string; 
    sellToken: string; 
    buyTax: bigint; 
    sellTax: string; 
    sellAmount: string;
    dexData: string;
}

export type DexPrice = {
    price: bigint;
    cAvgPrice: bigint;
    hAvgPrice: bigint;
    decimals: bigint;
    timestamp: bigint;
}
