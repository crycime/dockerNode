import { ethers } from "ethers";
import { BorrowInfo } from "./types";
import { LPool__factory } from "../../typechain";
import { checkTokenApprove } from "../helper/index";

/**
 * token0: the pool target token
 */
export class Lpool {
    private _provider: ethers.JsonRpcProvider;
    private _contract: string;

    /**
     *  @param address of the LPool delegator contract address.
     */
    constructor(address: string, provider: any) {
        this._contract = address;
        this._provider = provider;
    }

    /**
     *  @param lpAddress of the LPool contract address.
     */
    async getBorrowInterest(lpAddress: string): Promise<bigint> {
        const lpoolContract = LPool__factory.connect(lpAddress, this._provider);
        return await lpoolContract.borrowRatePerBlock();
    }

    /**
     *  @param lpAddress of the LPool contract address.
     */
    async getDepositInterest(lpAddress: string): Promise<bigint> {
        const lpoolContract = LPool__factory.connect(lpAddress, this._provider);
        return await lpoolContract.supplyRatePerBlock();
    }

    /** 
     *  Get the borrower details.
     *  @param lpAddress of the LPool contract address.
     */
    async borrowerDetail(marketId: number, lpAddress: string, borrower: string): Promise<BorrowInfo> {
        const lpoolContract = LPool__factory.connect(lpAddress, this._provider);
        const [borrowed, total] = await Promise.all([
            lpoolContract.borrowBalanceStored(marketId, borrower),
            lpoolContract.borrowBalanceCurrent(marketId, borrower),
        ]); 
        return {total: total, borrowed: borrowed, interset: (total - borrowed)};
    }

    /** 
     *  Get the borrower details.
     *  @param lpAddress of the LPool contract address.
     */
    async depositorDetail(marketId: number, lpAddress: string, depositor: string): Promise<{cTokenBalc: bigint, exchangeRate: bigint}> {
        const lpoolContract = LPool__factory.connect(lpAddress, this._provider);
        const [cTokenBalance, exRate] = await Promise.all([
            lpoolContract.balanceOf(depositor),
            lpoolContract.exchangeRateStored(),
        ]);

        return {cTokenBalc: cTokenBalance, exchangeRate: exRate}
    }

    /** 
     *  Deposit to LPool.
     *  @param lpAddress of the LPool contract address.
     */
    async deposit(lpAddress: string, amount: bigint, depositor: ethers.Signer) {
        const lpoolContract = LPool__factory.connect(lpAddress, depositor);
        await checkTokenApprove(await lpoolContract.underlying(), await depositor.getAddress(), lpAddress, amount, this._provider);
        await lpoolContract.mint.estimateGas(amount);
        await lpoolContract.mint(amount);
    }

    /** 
     *  Deposit to LPool.
     *  @param lpAddress of the LPool contract address.
     */
    async depositNative(lpAddress: string, amount: bigint, depositor: ethers.Signer) {
        const lpoolContract = LPool__factory.connect(lpAddress, depositor);
        await lpoolContract.mintEth.estimateGas({value: amount});
        await lpoolContract.mintEth({value: amount});
    }

    /** 
     *  Withdraw from LPool
     *  @param lpAddress of the LPool contract address.
     */
    async redeem(marketId: number, lpAddress: string, amount: bigint, depositor: ethers.Signer) {
        const lpoolContract = LPool__factory.connect(lpAddress, depositor);
        const acctSnapshot = await lpoolContract.getAccountSnapshot(marketId, await depositor.getAddress());
        if(acctSnapshot[0] < amount) {
            throw new Error("Insufficient redeem amount");
        }

        await lpoolContract.redeem.estimateGas(amount);
        await lpoolContract.redeem(amount);
    }
};