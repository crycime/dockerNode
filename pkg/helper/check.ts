import { ethers } from "ethers";
import { MockERC20__factory } from "../../typechain";

export async function checkTokenApprove(token: string, owner: string, spender: string, expAmount: bigint, provider: ethers.Provider) {
    const camt = await MockERC20__factory.connect(token, provider).allowance(owner, spender);
     if(camt < expAmount) {
        throw new Error("Insufficient token allowed");
    }
}