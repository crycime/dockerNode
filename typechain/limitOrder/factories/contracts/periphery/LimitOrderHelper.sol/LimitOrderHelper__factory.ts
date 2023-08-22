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
  LimitOrderHelper,
  LimitOrderHelperInterface,
} from "../../../../contracts/periphery/LimitOrderHelper.sol/LimitOrderHelper";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract ILimitOrder",
        name: "limitOrder",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
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
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isStopLoss",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price0",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getOrderStat",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "remaining",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price0",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal",
            type: "uint8",
          },
          {
            internalType: "enum LimitOrderHelper.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct LimitOrderHelper.OrderStatVars",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILimitOrder",
        name: "limitOrder",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "token0s",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "token1s",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "dexDatas",
        type: "bytes[]",
      },
    ],
    name: "getPrices",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal",
            type: "uint8",
          },
        ],
        internalType: "struct LimitOrderHelper.PriceVars[]",
        name: "results",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f74806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806336eab90b1461003b57806381ff23d114610064575b600080fd5b61004e61004936600461090e565b610084565b60405161005b9190610a40565b60405180910390f35b610077610072366004610ae9565b6105d8565b60405161005b9190610b96565b61008c61084f565b61009461084f565b604051633f2a784960e11b8152600481018a90526001600160a01b038b1690637e54f09290602401602060405180830381865afa1580156100d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fd9190610be8565b8082526000608083015260010361011c576004608082015290506105cc565b60008a6001600160a01b031663060d83976040518163ffffffff1660e01b8152600401602060405180830381865afa15801561015c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101809190610c01565b905060008b6001600160a01b03166329a726136040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e69190610c01565b604051631427a18160e11b815261ffff8c1660048201529091506000906001600160a01b0383169063284f43029060240161014060405180830381865afa158015610235573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102599190610c3b565b604080820151606083015191516352cd1b5760e11b81529293506001600160a01b0386169263a59a36ae926102969291603c908c90600401610d44565b60a060405180830381865afa1580156102b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d79190610d97565b602089015260ff1660608801525050604085015288156103495789158015610303575086846040015111155b8061031a575089801561031a575086846040015110155b1561033d576080840160035b9081600481111561033957610339610a2a565b9052505b839450505050506105cc565b876103845789158015610360575086846040015110155b8061031a575089801561031a57508684604001511161033d57608084016003610326565b89158015610396575086846040015111155b806103ad57508980156103ad575086846040015110155b156105c55760405163487484bd60e11b81526001600160a01b038316906390e9097a906103e0908e908a90600401610de0565b600060405180830381600087803b1580156103fa57600080fd5b505af115801561040e573d6000803e3d6000fd5b50505050600080846001600160a01b031663a59a36ae84604001518560600151603c8c6040518563ffffffff1660e01b81526004016104509493929190610d44565b60a060405180830381865afa15801561046d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104919190610d97565b505092509250508b1580156104a65750888211155b80156104cb575088811115806104cb575060208601516104c790603c610e1b565b4210155b8061050357508b80156104de5750888210155b801561050357508881101580610503575060208601516104ff90603c610e1b565b4210155b15610533576080860160035b9081600481111561052257610522610a2a565b9052509495506105cc945050505050565b8b15801561055b575088821015801561055b5750602086015161055790603c610e1b565b4210155b8061058857508b801561058857508882111580156105885750602086015161058490603c610e1b565b4210155b156105ac57610596886107ec565b60ff166002146105ac57600160808701526105b7565b60808601600261050f565b8596505050505050506105cc565b5091925050505b98975050505050505050565b60606000886001600160a01b031663060d83976040518163ffffffff1660e01b8152600401602060405180830381865afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190610c01565b90508667ffffffffffffffff811115610659576106596108ce565b60405190808252806020026020018201604052801561069e57816020015b60408051808201909152600080825260208201528152602001906001900390816106775790505b50915060005b878110156107df576040805180820190915260008082526020820152826001600160a01b031663355efdd98b8b858181106106e1576106e1610e33565b90506020020160208101906106f69190610e49565b8a8a8681811061070857610708610e33565b905060200201602081019061071d9190610e49565b89898781811061072f5761072f610e33565b90506020028101906107419190610e66565b6040518563ffffffff1660e01b81526004016107609493929190610ead565b6040805180830381865afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190610ef9565b60ff1660208301528152835181908590849081106107c0576107c0610e33565b60200260200101819052505080806107d790610f25565b9150506106a4565b5050979650505050505050565b60006001825110156108445760405162461bcd60e51b815260206004820181905260248201527f446578446174613a20746f4465782077726f6e67206461746120666f726d6174604482015260640160405180910390fd5b506020015160001a90565b6040518060a00160405280600081526020016000815260200160008152602001600060ff1681526020016000600481111561088c5761088c610a2a565b905290565b6001600160a01b03811681146108a657600080fd5b50565b61ffff811681146108a657600080fd5b803580151581146108c957600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715610908576109086108ce565b60405290565b600080600080600080600080610100898b03121561092b57600080fd5b883561093681610891565b975060208901359650604089013561094d816108a9565b955061095b60608a016108b9565b945061096960808a016108b9565b935061097760a08a016108b9565b925060c0890135915060e089013567ffffffffffffffff8082111561099b57600080fd5b818b0191508b601f8301126109af57600080fd5b8135818111156109c1576109c16108ce565b604051601f8201601f19908116603f011681019083821181831017156109e9576109e96108ce565b816040528281528e6020848701011115610a0257600080fd5b8260208601602083013760006020848301015280955050505050509295985092959890939650565b634e487b7160e01b600052602160045260246000fd5b600060a08201905082518252602083015160208301526040830151604083015260ff6060840151166060830152608083015160058110610a9057634e487b7160e01b600052602160045260246000fd5b8060808401525092915050565b60008083601f840112610aaf57600080fd5b50813567ffffffffffffffff811115610ac757600080fd5b6020830191508360208260051b8501011115610ae257600080fd5b9250929050565b60008060008060008060006080888a031215610b0457600080fd5b8735610b0f81610891565b9650602088013567ffffffffffffffff80821115610b2c57600080fd5b610b388b838c01610a9d565b909850965060408a0135915080821115610b5157600080fd5b610b5d8b838c01610a9d565b909650945060608a0135915080821115610b7657600080fd5b50610b838a828b01610a9d565b989b979a50959850939692959293505050565b602080825282518282018190526000919060409081850190868401855b82811015610bdb5781518051855286015160ff16868501529284019290850190600101610bb3565b5091979650505050505050565b600060208284031215610bfa57600080fd5b5051919050565b600060208284031215610c1357600080fd5b8151610c1e81610891565b9392505050565b80516108c981610891565b80516108c9816108a9565b60006101408284031215610c4e57600080fd5b610c566108e4565b610c5f83610c25565b8152610c6d60208401610c25565b6020820152610c7e60408401610c25565b6040820152610c8f60608401610c25565b6060820152610ca060808401610c30565b6080820152610cb160a08401610c30565b60a0820152610cc260c08401610c30565b60c0820152610cd360e08401610c25565b60e08201526101008381015190820152610120928301519281019290925250919050565b6000815180845260005b81811015610d1d57602081850181015186830182015201610d01565b81811115610d2f576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0385811682528416602082015263ffffffff83166040820152608060608201819052600090610d7c90830184610cf7565b9695505050505050565b805160ff811681146108c957600080fd5b600080600080600060a08688031215610daf57600080fd5b855194506020860151935060408601519250610dcd60608701610d86565b9150608086015190509295509295909350565b61ffff83168152604060208201526000610dfd6040830184610cf7565b949350505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e2e57610e2e610e05565b500190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610e5b57600080fd5b8135610c1e81610891565b6000808335601e19843603018112610e7d57600080fd5b83018035915067ffffffffffffffff821115610e9857600080fd5b602001915036819003821315610ae257600080fd5b6001600160a01b0385811682528416602082015260606040820181905281018290526000828460808401376000608084840101526080601f19601f850116830101905095945050505050565b60008060408385031215610f0c57600080fd5b82519150610f1c60208401610d86565b90509250929050565b600060018201610f3757610f37610e05565b506001019056fea2646970667358221220e084a22f9f43a699ca713af964ccd08c21667f5dd8f320aa3965980a45cc456364736f6c634300080f0033";

type LimitOrderHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LimitOrderHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LimitOrderHelper__factory extends ContractFactory {
  constructor(...args: LimitOrderHelperConstructorParams) {
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
      LimitOrderHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LimitOrderHelper__factory {
    return super.connect(runner) as LimitOrderHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitOrderHelperInterface {
    return new Interface(_abi) as LimitOrderHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LimitOrderHelper {
    return new Contract(address, _abi, runner) as unknown as LimitOrderHelper;
  }
}