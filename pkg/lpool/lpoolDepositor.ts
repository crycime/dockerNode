import { ethers } from "ethers";
import { checkTokenApprove } from "../helper/index";
import { LPool__factory, LPoolDepositor__factory } from "../../typechain";

export class LPoolDepositor {
    private _provider: ethers.JsonRpcProvider;
    private _contract: string;

    /**
     *  @param address of the LPoolDepositor delegator contract address.
     */
    constructor(address: string, provider: any) {
        this._contract = address;
        this._provider = provider;
    }

    /** 
     *  Deposit to LPool.
     *  @param lpAddress of the LPool contract address.
     */
    async deposit(lpAddress: string, amount: bigint, depositor: ethers.Signer) {
        const lpoolDeposContract = LPoolDepositor__factory.connect(this._contract, depositor);
        const lpoolContract = LPool__factory.connect(lpAddress, this._provider);
        await checkTokenApprove(await lpoolContract.underlying(), await depositor.getAddress(), lpAddress, amount, this._provider);
        await lpoolDeposContract.deposit(lpAddress, amount);
    }

    /** 
     *  Deposit to LPool.
     *  @param lpAddress of the LPool contract address.
     */
    async depositNative(lpAddress: string, amount: bigint, depositor: ethers.Signer) {
        const lpoolDeposContract = LPoolDepositor__factory.connect(this._contract, depositor);
        await lpoolDeposContract.depositNative(lpAddress, {value: amount});
    }
};