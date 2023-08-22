export const UNISWAPV2_DEX_DATA = "0x01" + "000000" + "02";
export const UNISWAPV3_DEX_DATA = "0x02" + "000bb8" + "02";
export const PANCAKE_DEX_DATA = "0x03"+ "000000" + "02";

export const toWei = (amount: number) => {
    return BigInt(1e18) * BigInt(amount);
}