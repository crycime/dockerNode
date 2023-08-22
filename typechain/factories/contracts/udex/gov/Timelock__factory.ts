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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Timelock,
  TimelockInterface,
} from "../../../../contracts/udex/gov/Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
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
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
  {
    inputs: [],
    name: "admin_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161170a38038061170a8339818101604052604081101561003357600080fd5b50805160209091015160b4811015610092576040805162461bcd60e51b815260206004820152601960248201527f44656c6179206d75737420657863656564206d696e696d756d00000000000000604482015290519081900360640190fd5b6203f4808111156100ea576040805162461bcd60e51b815260206004820152601d60248201527f44656c6179206d757374206e6f7420657863656564206d6178696d756d000000604482015290519081900360640190fd5b600080546001600160a01b039093166001600160a01b0319909316929092179091556002556003805460ff191690556115e2806101286000396000f3fe6080604052600436106100e15760003560e01c80636fc1f57e1161007f578063c1a287e211610059578063c1a287e21461062c578063e177246e14610641578063f2b065371461066b578063f851a44014610695576100e8565b80636fc1f57e146105d95780637d645fab14610602578063b1b43ae514610617576100e8565b80633a66f901116100bb5780633a66f901146102e55780634dd18bf514610444578063591fcdfe146104775780636a42b8f8146105c4576100e8565b80630825f38f146100ea5780630e18b6811461029f57806326782247146102b4576100e8565b366100e857005b005b61022a600480360360a081101561010057600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561012f57600080fd5b82018360208201111561014157600080fd5b803590602001918460018302840111600160201b8311171561016257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156101b457600080fd5b8201836020820111156101c657600080fd5b803590602001918460018302840111600160201b831117156101e757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506106aa915050565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026457818101518382015260200161024c565b50505050905090810190601f1680156102915780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102ab57600080fd5b506100e8610c0c565b3480156102c057600080fd5b506102c9610cbe565b604080516001600160a01b039092168252519081900360200190f35b3480156102f157600080fd5b50610432600480360360a081101561030857600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561033757600080fd5b82018360208201111561034957600080fd5b803590602001918460018302840111600160201b8311171561036a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103bc57600080fd5b8201836020820111156103ce57600080fd5b803590602001918460018302840111600160201b831117156103ef57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610ccd915050565b60408051918252519081900360200190f35b34801561045057600080fd5b506100e86004803603602081101561046757600080fd5b50356001600160a01b0316610ff0565b34801561048357600080fd5b506100e8600480360360a081101561049a57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104c957600080fd5b8201836020820111156104db57600080fd5b803590602001918460018302840111600160201b831117156104fc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561054e57600080fd5b82018360208201111561056057600080fd5b803590602001918460018302840111600160201b8311171561058157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061110d915050565b3480156105d057600080fd5b506104326113cc565b3480156105e557600080fd5b506105ee6113d2565b604080519115158252519081900360200190f35b34801561060e57600080fd5b506104326113db565b34801561062357600080fd5b506104326113e2565b34801561063857600080fd5b506104326113e7565b34801561064d57600080fd5b506100e86004803603602081101561066457600080fd5b50356113ee565b34801561067757600080fd5b506105ee6004803603602081101561068e57600080fd5b5035611523565b3480156106a157600080fd5b506102c9611538565b6000546060906001600160a01b03163314610708576040805162461bcd60e51b815260206004820152601960248201527821b0b6361036bab9ba1031b7b6b290333937b69030b236b4b760391b604482015290519081900360640190fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561076e578181015183820152602001610756565b50505050905090810190601f16801561079b5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156107ce5781810151838201526020016107b6565b50505050905090810190601f1680156107fb5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052805160209091012060035490995060ff1615975061095296505050505050505760008181526004602052604090205460ff16610887576040805162461bcd60e51b8152602060048201526015602482015274151e081a185cdb89dd081899595b881c5d595d5959605a1b604482015290519081900360640190fd5b82610890611547565b10156108dc576040805162461bcd60e51b81526020600482015260166024820152754e6f74207375727061737365642074696d656c6f636b60501b604482015290519081900360640190fd5b6108e9836212750061154b565b6108f1611547565b111561093b576040805162461bcd60e51b81526020600482015260146024820152735472616e73616374696f6e206973207374616c6560601b604482015290519081900360640190fd5b6000818152600460205260409020805460ff191690555b60608551600014156109655750836109e8565b85805190602001208560405160200180836001600160e01b031916815260040182805190602001908083835b602083106109b05780518252601f199092019160209182019101610991565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b600080896001600160a01b031689846040518082805190602001908083835b60208310610a265780518252601f199092019160209182019101610a07565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610a88576040519150601f19603f3d011682016040523d82523d6000602084013e610a8d565b606091505b509150915081610ae4576040805162461bcd60e51b815260206004820152601e60248201527f5472616e73616374696f6e20657865637574696f6e2072657665727465640000604482015290519081900360640190fd5b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610b61578181015183820152602001610b49565b50505050905090810190601f168015610b8e5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610bc1578181015183820152602001610ba9565b50505050905090810190601f168015610bee5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39998505050505050505050565b6001546001600160a01b03163314610c6b576040805162461bcd60e51b815260206004820152601b60248201527f43616c6c206d7573742066726f6d2070656e64696e6741646d696e0000000000604482015290519081900360640190fd5b60008054336001600160a01b031991821617808355600180549092169091556040516001600160a01b03909116917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b6001546001600160a01b031681565b600080546001600160a01b03163314610d29576040805162461bcd60e51b815260206004820152601960248201527821b0b6361036bab9ba1031b7b6b290333937b69030b236b4b760391b604482015290519081900360640190fd5b610d3d600254610d37611547565b9061154b565b821015610d8a576040805162461bcd60e51b8152602060048201526016602482015275455441206d75737420736174697366792064656c617960501b604482015290519081900360640190fd5b6000868686868660405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610df0578181015183820152602001610dd8565b50505050905090810190601f168015610e1d5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610e50578181015183820152602001610e38565b50505050905090810190601f168015610e7d5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060016004600083815260200190815260200160002060006101000a81548160ff021916908315150217905550866001600160a01b0316817f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f88888888604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610f48578181015183820152602001610f30565b50505050905090810190601f168015610f755780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b83811015610fa8578181015183820152602001610f90565b50505050905090810190601f168015610fd55780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a39695505050505050565b60035460ff16156110545733301461104f576040805162461bcd60e51b815260206004820152601c60248201527f43616c6c206d75737420636f6d652066726f6d2054696d656c6f636b00000000604482015290519081900360640190fd5b6110bd565b6000546001600160a01b031633146110af576040805162461bcd60e51b815260206004820152601960248201527821b0b6361036bab9ba1031b7b6b290333937b69030b236b4b760391b604482015290519081900360640190fd5b6003805460ff191660011790555b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b03163314611168576040805162461bcd60e51b815260206004820152601960248201527821b0b6361036bab9ba1031b7b6b290333937b69030b236b4b760391b604482015290519081900360640190fd5b6000858585858560405160200180866001600160a01b031681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156111ce5781810151838201526020016111b6565b50505050905090810190601f1680156111fb5780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561122e578181015183820152602001611216565b50505050905090810190601f16801561125b5780820380516001836020036101000a031916815260200191505b5097505050505050505060405160208183030381529060405280519060200120905060006004600083815260200190815260200160002060006101000a81548160ff021916908315150217905550856001600160a01b0316817f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8787878787604051808581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561132657818101518382015260200161130e565b50505050905090810190601f1680156113535780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b8381101561138657818101518382015260200161136e565b50505050905090810190601f1680156113b35780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a3505050505050565b60025481565b60035460ff1681565b6203f48081565b60b481565b6212750081565b333014611442576040805162461bcd60e51b815260206004820152601c60248201527f43616c6c206d75737420636f6d652066726f6d2054696d656c6f636b00000000604482015290519081900360640190fd5b60b4811015611498576040805162461bcd60e51b815260206004820152601960248201527f44656c6179206d75737420657863656564206d696e696d756d00000000000000604482015290519081900360640190fd5b6203f4808111156114f0576040805162461bcd60e51b815260206004820152601d60248201527f44656c6179206d757374206e6f7420657863656564206d6178696d756d000000604482015290519081900360640190fd5b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b60046020526000908152604090205460ff1681565b6000546001600160a01b031681565b4290565b6000828201838110156115a5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fea2646970667358221220f5f79304c7ad2f4bb49b6bcda591487b89af73a1ccaf74e28aae011852475d7164736f6c63430007060033";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    admin_: AddressLike,
    delay_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  override deploy(
    admin_: AddressLike,
    delay_: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<
      Timelock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Timelock__factory {
    return super.connect(runner) as Timelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new Interface(_abi) as TimelockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Timelock {
    return new Contract(address, _abi, runner) as unknown as Timelock;
  }
}