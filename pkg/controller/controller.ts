import { ethers } from "ethers";
import { ControllerV1__factory, LPool__factory } from "../../typechain";

export class ControllerV1 {
    private _provider: ethers.JsonRpcProvider;
    private _contract: string;

    /**
     *  @param address of the controllerV1 delegator contract address.
     */
    constructor(address: string, provider: ethers.JsonRpcProvider) {
        this._contract = address;
        this._provider = provider;
    }

    async createMarket(
        token0: string, 
        token1: string, 
        marginLimit: bigint,
        dexData: string,
        deployer: ethers.Signer, 
        ): Promise<{pool0: string, pool1: string}> {
        const controllerContract = ControllerV1__factory.connect(this._contract, deployer);
        const tx = await controllerContract.createLPoolPair(token0, token1, marginLimit, dexData);
        const txreceiption = await tx.wait();
        const log = ControllerV1__factory.createInterface().parseLog({topics: txreceiption!.logs[5].topics.map(item => item), data: txreceiption!.logs[5].data});
        const lPoolPairs = await controllerContract.lpoolPairs(token0, token1);
        const pool0Contract = LPool__factory.connect(lPoolPairs.lpool0, this._provider);
        const pool1Contract = LPool__factory.connect(lPoolPairs.lpool1, this._provider);

        console.log("created pool pair toke0,token1,pool0,poo1", log!.args[0], log!.args[2], log!.args[1], log!.args[3]);
        if( 
            log!.args[0] != await pool0Contract.underlying() 
            || log!.args[2] != await pool1Contract.underlying() 
            || lPoolPairs.lpool0 != log!.args[1] 
            || lPoolPairs.lpool1 != log!.args[3]
        ) {
            throw new Error(`Create market abnormal, 
                token0: ${await pool0Contract.underlying()}, 
                token1: ${await pool1Contract.underlying()}, 
                pool0:${lPoolPairs.lpool0}, 
                pool1:${lPoolPairs.lpool1}`);
        }

        return {pool0: lPoolPairs.lpool0, pool1: lPoolPairs.lpool1};
    }

    async createOfficalMarket(
        token0: string, 
        token1: string, 
        marginLimit: bigint,
        dexData: string,
        admin: ethers.Signer, 
        ): Promise<{pool0: string, pool1: string}> {
        const controllerContract = ControllerV1__factory.connect(this._contract, admin);
        const tx = await controllerContract.createOfficialLPoolPair(token0, token1, marginLimit, dexData);
        const txreceiption = await tx.wait();
        const log = ControllerV1__factory.createInterface().parseLog({topics: txreceiption!.logs[5].topics.map(item => item), data: txreceiption!.logs[5].data});
        const lPoolPairs = await controllerContract.lpoolPairs(token0, token1);
        const pool0Contract = LPool__factory.connect(lPoolPairs.lpool0, this._provider);
        const pool1Contract = LPool__factory.connect(lPoolPairs.lpool1, this._provider);

        console.log("created official pool pair toke0,token1,pool0,poo1", log!.args[0], log!.args[2], log!.args[1], log!.args[3]);
        if( 
            log!.args[0] != await pool0Contract.underlying() 
            || log!.args[2] != await pool1Contract.underlying() 
            || lPoolPairs.lpool0 != log!.args[1] 
            || lPoolPairs.lpool1 != log!.args[3]
        ) {
            throw new Error(`Create market abnormal, 
                token0: ${await pool0Contract.underlying()}, 
                token1: ${await pool1Contract.underlying()}, 
                pool0:${lPoolPairs.lpool0}, 
                pool1:${lPoolPairs.lpool1}`);
        }

        return {pool0: lPoolPairs.lpool0, pool1: lPoolPairs.lpool1};
    }
};