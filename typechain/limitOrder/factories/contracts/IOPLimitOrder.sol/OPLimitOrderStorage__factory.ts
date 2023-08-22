/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OPLimitOrderStorage,
  OPLimitOrderStorageInterface,
} from "../../../contracts/IOPLimitOrder.sol/OPLimitOrderStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    name: "OrderCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commission",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "filling",
        type: "uint256",
      },
    ],
    name: "OrderFilled",
    type: "event",
  },
  {
    inputs: [],
    name: "CLOSE_ORDER_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPEN_ORDER_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORDER_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dexAgg",
    outputs: [
      {
        internalType: "contract DexAggregatorInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openLev",
    outputs: [
      {
        internalType: "contract OpenLevInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class OPLimitOrderStorage__factory {
  static readonly abi = _abi;
  static createInterface(): OPLimitOrderStorageInterface {
    return new Interface(_abi) as OPLimitOrderStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OPLimitOrderStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as OPLimitOrderStorage;
  }
}