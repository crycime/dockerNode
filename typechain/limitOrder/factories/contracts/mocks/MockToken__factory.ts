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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockToken,
  MockTokenInterface,
} from "../../../contracts/mocks/MockToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d8c38038062000d8c83398101604081905262000034916200021e565b828260036200004483826200031f565b5060046200005382826200031f565b5050506200006833826200007160201b60201c565b50505062000412565b6200007d828262000081565b5050565b6001600160a01b038216620000dc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f09190620003eb565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36200007d600083835b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200017957600080fd5b81516001600160401b038082111562000196576200019662000151565b604051601f8301601f19908116603f01168101908282118183101715620001c157620001c162000151565b81604052838152602092508683858801011115620001de57600080fd5b600091505b83821015620002025785820183015181830184015290820190620001e3565b83821115620002145760008385830101525b9695505050505050565b6000806000606084860312156200023457600080fd5b83516001600160401b03808211156200024c57600080fd5b6200025a8783880162000167565b945060208601519150808211156200027157600080fd5b50620002808682870162000167565b925050604084015190509250925092565b600181811c90821680620002a657607f821691505b602082108103620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200014c57600081815260208120601f850160051c81016020861015620002f65750805b601f850160051c820191505b81811015620003175782815560010162000302565b505050505050565b81516001600160401b038111156200033b576200033b62000151565b62000353816200034c845462000291565b84620002cd565b602080601f8311600181146200038b5760008415620003725750858301515b600019600386901b1c1916600185901b17855562000317565b600085815260208120601f198616915b82811015620003bc578886015182559484019460019091019084016200039b565b5085821015620003db5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082198211156200040d57634e487b7160e01b600052601160045260246000fd5b500190565b61096a80620004226000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146101a0578063a457c2d7146101a8578063a9059cbb146101bb578063dd62ed3e146101ce57600080fd5b8063395093511461014f57806340c10f191461016257806370a082311461017757600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633408e47014610149575b600080fd5b6100dc6101e1565b6040516100e991906107a8565b60405180910390f35b610105610100366004610819565b610273565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b610105610135366004610843565b61028b565b604051601281526020016100e9565b46610119565b61010561015d366004610819565b6102af565b610175610170366004610819565b6102d1565b005b61011961018536600461087f565b6001600160a01b031660009081526020819052604090205490565b6100dc6102df565b6101056101b6366004610819565b6102ee565b6101056101c9366004610819565b61036e565b6101196101dc3660046108a1565b61037c565b6060600380546101f0906108d4565b80601f016020809104026020016040519081016040528092919081815260200182805461021c906108d4565b80156102695780601f1061023e57610100808354040283529160200191610269565b820191906000526020600020905b81548152906001019060200180831161024c57829003601f168201915b5050505050905090565b6000336102818185856103a7565b5060019392505050565b6000336102998582856104cb565b6102a4858585610545565b506001949350505050565b6000336102818185856102c2838361037c565b6102cc919061090e565b6103a7565b6102db82826106e9565b5050565b6060600480546101f0906108d4565b600033816102fc828661037c565b9050838110156103615760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102a482868684036103a7565b600033610281818585610545565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104095760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610358565b6001600160a01b03821661046a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610358565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104d7848461037c565b9050600019811461053f57818110156105325760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610358565b61053f84848484036103a7565b50505050565b6001600160a01b0383166105a95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610358565b6001600160a01b03821661060b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610358565b6001600160a01b038316600090815260208190526040902054818110156106835760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610358565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361053f565b6001600160a01b03821661073f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610358565b8060026000828254610751919061090e565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107d5578581018301518582016040015282016107b9565b818111156107e7576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461081457600080fd5b919050565b6000806040838503121561082c57600080fd5b610835836107fd565b946020939093013593505050565b60008060006060848603121561085857600080fd5b610861846107fd565b925061086f602085016107fd565b9150604084013590509250925092565b60006020828403121561089157600080fd5b61089a826107fd565b9392505050565b600080604083850312156108b457600080fd5b6108bd836107fd565b91506108cb602084016107fd565b90509250929050565b600181811c908216806108e857607f821691505b60208210810361090857634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561092f57634e487b7160e01b600052601160045260246000fd5b50019056fea264697066735822122085d3dd56b54dd042cf71a3ec928ce1902ca664fc4c82111fb2d56ae33e80293a64736f6c634300080f0033";

type MockTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockToken__factory extends ContractFactory {
  constructor(...args: MockTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    amount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, amount, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    amount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, amount, overrides || {}) as Promise<
      MockToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockToken__factory {
    return super.connect(runner) as MockToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenInterface {
    return new Interface(_abi) as MockTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockToken {
    return new Contract(address, _abi, runner) as unknown as MockToken;
  }
}