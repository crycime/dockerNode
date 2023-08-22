/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OpenLevStorage,
  OpenLevStorageInterface,
} from "../../../../contracts/udex/OpenLevInterface.sol/OpenLevStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "token",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "ChangeAllowedDepositTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "longToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "depositToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "heldAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "returnAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token0Price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dex",
        type: "uint32",
      },
    ],
    name: "Liquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "longToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "depositToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposited",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "held",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token0Price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dex",
        type: "uint32",
      },
    ],
    name: "MarginTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dexAggregator",
        type: "address",
      },
    ],
    name: "NewAddressConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "defaultFeesRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "insuranceRatio",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "defaultMarginLimit",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "priceDiffientRatio",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "updatePriceDiscount",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feesDiscount",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "feesDiscountThreshold",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "penaltyRatio",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "maxLiquidationPriceDiffientRatio",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "twapDuration",
        type: "uint16",
      },
    ],
    name: "NewCalculateConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "defaultliquidationRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidaMaximumYield",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidaMinimumYield",
        type: "uint16",
      },
    ],
    name: "NewLiquidationConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feesRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "marginLimit",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "priceDiffientRatio",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "dexs",
        type: "uint32[]",
      },
    ],
    name: "NewMarketConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidationRate",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidaMaximumYield",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidaMinimumYield",
        type: "uint16",
      },
    ],
    name: "NewMarketLiquidationConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "marketId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "longToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "depositToken",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "closeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositDecrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositReturn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token0Price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dex",
        type: "uint32",
      },
    ],
    name: "TradeClosed",
    type: "event",
  },
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addressConfig",
    outputs: [
      {
        internalType: "contract DexAggregatorInterface",
        name: "dexAggregator",
        type: "address",
      },
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        internalType: "address",
        name: "wETH",
        type: "address",
      },
      {
        internalType: "address",
        name: "xOLE",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "calculateConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "defaultFeesRate",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "insuranceRatio",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "defaultMarginLimit",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "priceDiffientRatio",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "updatePriceDiscount",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "feesDiscount",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "feesDiscountThreshold",
        type: "uint128",
      },
      {
        internalType: "uint16",
        name: "penaltyRatio",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "maxLiquidationPriceDiffientRatio",
        type: "uint8",
      },
      {
        internalType: "uint16",
        name: "twapDuration",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "defaultliquidationRate",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "liquidaMaximumYield",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "liquidaMinimumYield",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "contract LPoolInterface",
        name: "pool0",
        type: "address",
      },
      {
        internalType: "contract LPoolInterface",
        name: "pool1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "marginLimit",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "feesRate",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "priceDiffientRatio",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "priceUpdater",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pool0Insurance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pool1Insurance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "marketsLiquidations",
    outputs: [
      {
        internalType: "uint16",
        name: "liquidationRate",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "liquidaMaximumYield",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "liquidaMinimumYield",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numPairs",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "opLimitOrder",
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
    name: "router1inch",
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
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "supportDexs",
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
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "taxes",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalHelds",
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
] as const;

export class OpenLevStorage__factory {
  static readonly abi = _abi;
  static createInterface(): OpenLevStorageInterface {
    return new Interface(_abi) as OpenLevStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OpenLevStorage {
    return new Contract(address, _abi, runner) as unknown as OpenLevStorage;
  }
}
