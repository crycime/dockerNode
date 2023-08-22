/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  UniswapSwapHelper,
  UniswapSwapHelperInterface,
} from "../../../../contracts/udex/test/UniswapSwapHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Router",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604051609e380380609e83398181016040526020811015602f57600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055603f80605f6000396000f3fe6080604052600080fdfea2646970667358221220e0060858c9bc4ef7ac8e4309e1caae722a502377e10be501d4289ef9cf201d4164736f6c63430007060033";

type UniswapSwapHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapSwapHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapSwapHelper__factory extends ContractFactory {
  constructor(...args: UniswapSwapHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override deploy(
    _router: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_router, overrides || {}) as Promise<
      UniswapSwapHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UniswapSwapHelper__factory {
    return super.connect(runner) as UniswapSwapHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapSwapHelperInterface {
    return new Interface(_abi) as UniswapSwapHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UniswapSwapHelper {
    return new Contract(address, _abi, runner) as unknown as UniswapSwapHelper;
  }
}
