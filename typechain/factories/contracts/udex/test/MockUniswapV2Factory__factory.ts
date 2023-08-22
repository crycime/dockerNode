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
  MockUniswapV2Factory,
  MockUniswapV2FactoryInterface,
} from "../../../../contracts/udex/test/MockUniswapV2Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MockUniswapV2Pair",
        name: "pair",
        type: "address",
      },
    ],
    name: "addPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "getPair",
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
  "0x608060405234801561001057600080fd5b5061044b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c2b7bbb61461003b578063e6a4390514610050575b600080fd5b61004e6100493660046103cd565b610079565b005b61006361005e366004610395565b610301565b60405161007091906103e9565b60405180910390f35b80600080836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156100b657600080fd5b505afa1580156100ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ee9190610379565b6001600160a01b03166001600160a01b031681526020019081526020016000206000836001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561014957600080fd5b505afa15801561015d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101819190610379565b6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600080836001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561020257600080fd5b505afa158015610216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023a9190610379565b6001600160a01b03166001600160a01b031681526020019081526020016000206000836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561029557600080fd5b505afa1580156102a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cd9190610379565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905550565b600080826001600160a01b0316846001600160a01b0316101561034a57506001600160a01b03808416600090815260208181526040808320868516845290915290205416610372565b506001600160a01b038083166000908152602081815260408083208785168452909152902054165b9392505050565b60006020828403121561038a578081fd5b8151610372816103fd565b600080604083850312156103a7578081fd5b82356103b2816103fd565b915060208301356103c2816103fd565b809150509250929050565b6000602082840312156103de578081fd5b8135610372816103fd565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461041257600080fd5b5056fea26469706673582212209470c264647a96dcbe5a7d56a56baea87cef127ddce98646d142ba129270f9b764736f6c63430007060033";

type MockUniswapV2FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockUniswapV2FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockUniswapV2Factory__factory extends ContractFactory {
  constructor(...args: MockUniswapV2FactoryConstructorParams) {
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
      MockUniswapV2Factory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockUniswapV2Factory__factory {
    return super.connect(runner) as MockUniswapV2Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUniswapV2FactoryInterface {
    return new Interface(_abi) as MockUniswapV2FactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockUniswapV2Factory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockUniswapV2Factory;
  }
}