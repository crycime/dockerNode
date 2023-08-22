import { ethers } from "ethers";
import { checkTokenApprove } from "../pkg/helper/index";
import { MockERC20__factory } from "../typechain";

export async function tokenApprove(token: string, spender: string, amount: bigint, signer: ethers.Signer) {
    if (!signer.provider) {
        throw new Error("Invalid provider");
    }

    try {
        await checkTokenApprove(token, await signer.getAddress(), spender, amount, signer.provider);
    } catch (e) {
        const token0Contract = MockERC20__factory.connect(token, signer);
        await token0Contract.approve(spender, amount);
    }
}