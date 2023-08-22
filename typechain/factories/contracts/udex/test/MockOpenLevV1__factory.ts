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
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockOpenLevV1,
  MockOpenLevV1Interface,
} from "../../../../contracts/udex/test/MockOpenLevV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "activeTrades",
    outputs: [
      {
        internalType: "uint256",
        name: "deposited",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "held",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "depositToken",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "lastBlockNum",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "heldRelativeBorrowed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newHeld",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "longToken",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    name: "setActiveTrades",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061024e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635778c33f1461003b5780636c3fbc341461007b575b600080fd5b6100796004803603608081101561005157600080fd5b506001600160a01b038135169061ffff602082013516906040810135151590606001356100f3565b005b6100b36004803603606081101561009157600080fd5b506001600160a01b038135169061ffff602082013516906040013515156101c1565b604080519788526020880196909652931515868601526001600160801b039092166060860152608085015260a084015260c0830152519081900360e00190f35b506040805160e081018252600080825260016020808401828152848601848152606086018581526080870186815260a0880187815260c089018881526001600160a01b03909d16885287865289882061ffff909c1688529a85528887209915158752989093529590932093518455915190830155915160028201805493516001600160801b03166101000270ffffffffffffffffffffffffffffffff001992151560ff1990951694909417919091169290921790915590516003820155905160048201559051600590910155565b600060208181529381526040808220855292815282812090935282529020805460018201546002830154600384015460048501546005909501549394929360ff8316936101009093046001600160801b031692908756fea2646970667358221220c0b9624b23aef04c95d036c89554c5652a196cf9bf274d886c14692213ac6ae064736f6c63430007060033";

type MockOpenLevV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockOpenLevV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockOpenLevV1__factory extends ContractFactory {
  constructor(...args: MockOpenLevV1ConstructorParams) {
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
      MockOpenLevV1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockOpenLevV1__factory {
    return super.connect(runner) as MockOpenLevV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOpenLevV1Interface {
    return new Interface(_abi) as MockOpenLevV1Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockOpenLevV1 {
    return new Contract(address, _abi, runner) as unknown as MockOpenLevV1;
  }
}
