/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DelegateInterface,
  DelegateInterfaceInterface,
} from "../../../contracts/udex/DelegateInterface";

const _abi = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060948061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b6033604f565b604080516001600160a01b039092168252519081900360200190f35b6000546001600160a01b03168156fea26469706673582212200b38ae09d4d35c766db2aca5e4077935e0e99ed099b02429b0b231b90b79533c64736f6c63430007060033";

type DelegateInterfaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegateInterfaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DelegateInterface__factory extends ContractFactory {
  constructor(...args: DelegateInterfaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DelegateInterface & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DelegateInterface__factory {
    return super.connect(runner) as DelegateInterface__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegateInterfaceInterface {
    return new Interface(_abi) as DelegateInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DelegateInterface {
    return new Contract(address, _abi, runner) as unknown as DelegateInterface;
  }
}
