/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace Types {
  export type MarginTradeVarsStruct = {
    marketId: BigNumberish;
    longToken: boolean;
    depositToken: boolean;
    deposit: BigNumberish;
    borrow: BigNumberish;
    minBuyAmount: BigNumberish;
  };

  export type MarginTradeVarsStructOutput = [
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    deposit: bigint,
    borrow: bigint,
    minBuyAmount: bigint
  ] & {
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    deposit: bigint;
    borrow: bigint;
    minBuyAmount: bigint;
  };
}

export interface OpenLevInterfaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addMarket"
      | "closeTrade"
      | "closeTradeFor"
      | "getMarketSupportDexs"
      | "liquidate"
      | "marginRatio"
      | "marginTrade"
      | "marginTradeFor"
      | "moveInsurance"
      | "payoffTrade"
      | "setAddressConfig"
      | "setCalculateConfig"
      | "setLiquidationConfig"
      | "setMarketConfig"
      | "setMarketLiquidationConfig"
      | "setOpLimitOrder"
      | "setRouter1inch"
      | "setSupportDex"
      | "setTaxRate"
      | "setTokenLiquidationFactor"
      | "updatePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMarket",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "closeTrade",
    values: [BigNumberish, boolean, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "closeTradeFor",
    values: [
      AddressLike,
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketSupportDexs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [AddressLike, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marginRatio",
    values: [AddressLike, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marginTrade",
    values: [Types.MarginTradeVarsStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marginTradeFor",
    values: [AddressLike, Types.MarginTradeVarsStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "moveInsurance",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payoffTrade",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressConfig",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCalculateConfig",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidationConfig",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketConfig",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketLiquidationConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOpLimitOrder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter1inch",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportDex",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setTaxRate",
    values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenLiquidationFactor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closeTrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeTradeFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketSupportDexs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marginRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginTradeFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moveInsurance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payoffTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddressConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCalculateConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidationConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketLiquidationConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOpLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRouter1inch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupportDex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTaxRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenLiquidationFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
}

export interface OpenLevInterface extends BaseContract {
  connect(runner?: ContractRunner | null): OpenLevInterface;
  waitForDeployment(): Promise<this>;

  interface: OpenLevInterfaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addMarket: TypedContractMethod<
    [
      pool0: AddressLike,
      pool1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  closeTrade: TypedContractMethod<
    [
      marketId: BigNumberish,
      longToken: boolean,
      closeAmount: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  closeTradeFor: TypedContractMethod<
    [
      trader: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      closeHeld: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  getMarketSupportDexs: TypedContractMethod<
    [marketId: BigNumberish],
    [bigint[]],
    "view"
  >;

  liquidate: TypedContractMethod<
    [
      owner: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  marginRatio: TypedContractMethod<
    [
      owner: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      dexData: BytesLike
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        current: bigint;
        cAvg: bigint;
        hAvg: bigint;
        limit: bigint;
      }
    ],
    "view"
  >;

  marginTrade: TypedContractMethod<
    [tradeVars: Types.MarginTradeVarsStruct, dexData: BytesLike],
    [bigint],
    "payable"
  >;

  marginTradeFor: TypedContractMethod<
    [
      trader: AddressLike,
      tradeVars: Types.MarginTradeVarsStruct,
      dexData: BytesLike
    ],
    [bigint],
    "payable"
  >;

  moveInsurance: TypedContractMethod<
    [
      marketId: BigNumberish,
      poolIndex: BigNumberish,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  payoffTrade: TypedContractMethod<
    [marketId: BigNumberish, longToken: boolean],
    [void],
    "payable"
  >;

  setAddressConfig: TypedContractMethod<
    [controller: AddressLike, dexAggregator: AddressLike],
    [void],
    "nonpayable"
  >;

  setCalculateConfig: TypedContractMethod<
    [
      defaultFeesRate: BigNumberish,
      insuranceRatio: BigNumberish,
      defaultMarginLimit: BigNumberish,
      priceDiffientRatio: BigNumberish,
      updatePriceDiscount: BigNumberish,
      feesDiscount: BigNumberish,
      feesDiscountThreshold: BigNumberish,
      penaltyRatio: BigNumberish,
      maxLiquidationPriceDiffientRatio: BigNumberish,
      twapDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setLiquidationConfig: TypedContractMethod<
    [
      defaultliquidationRate: BigNumberish,
      liquidaMaximumYield: BigNumberish,
      liquidaMinimumYield: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setMarketConfig: TypedContractMethod<
    [
      marketId: BigNumberish,
      feesRate: BigNumberish,
      marginLimit: BigNumberish,
      priceDiffientRatio: BigNumberish,
      dexs: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  setMarketLiquidationConfig: TypedContractMethod<
    [
      marketId: BigNumberish,
      liquidationRate: BigNumberish,
      liquidaMaximumYield: BigNumberish,
      liquidaMinimumYield: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setOpLimitOrder: TypedContractMethod<
    [_opLimitOrder: AddressLike],
    [void],
    "nonpayable"
  >;

  setRouter1inch: TypedContractMethod<
    [_router1inch: AddressLike],
    [void],
    "nonpayable"
  >;

  setSupportDex: TypedContractMethod<
    [dex: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;

  setTaxRate: TypedContractMethod<
    [
      marketId: BigNumberish,
      token: AddressLike,
      index: BigNumberish,
      tax: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setTokenLiquidationFactor: TypedContractMethod<
    [token: AddressLike, factor: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePrice: TypedContractMethod<
    [marketId: BigNumberish, dexData: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addMarket"
  ): TypedContractMethod<
    [
      pool0: AddressLike,
      pool1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closeTrade"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      longToken: boolean,
      closeAmount: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closeTradeFor"
  ): TypedContractMethod<
    [
      trader: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      closeHeld: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getMarketSupportDexs"
  ): TypedContractMethod<[marketId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "liquidate"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "marginRatio"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      marketId: BigNumberish,
      longToken: boolean,
      dexData: BytesLike
    ],
    [
      [bigint, bigint, bigint, bigint] & {
        current: bigint;
        cAvg: bigint;
        hAvg: bigint;
        limit: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "marginTrade"
  ): TypedContractMethod<
    [tradeVars: Types.MarginTradeVarsStruct, dexData: BytesLike],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "marginTradeFor"
  ): TypedContractMethod<
    [
      trader: AddressLike,
      tradeVars: Types.MarginTradeVarsStruct,
      dexData: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "moveInsurance"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      poolIndex: BigNumberish,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "payoffTrade"
  ): TypedContractMethod<
    [marketId: BigNumberish, longToken: boolean],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setAddressConfig"
  ): TypedContractMethod<
    [controller: AddressLike, dexAggregator: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCalculateConfig"
  ): TypedContractMethod<
    [
      defaultFeesRate: BigNumberish,
      insuranceRatio: BigNumberish,
      defaultMarginLimit: BigNumberish,
      priceDiffientRatio: BigNumberish,
      updatePriceDiscount: BigNumberish,
      feesDiscount: BigNumberish,
      feesDiscountThreshold: BigNumberish,
      penaltyRatio: BigNumberish,
      maxLiquidationPriceDiffientRatio: BigNumberish,
      twapDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLiquidationConfig"
  ): TypedContractMethod<
    [
      defaultliquidationRate: BigNumberish,
      liquidaMaximumYield: BigNumberish,
      liquidaMinimumYield: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMarketConfig"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      feesRate: BigNumberish,
      marginLimit: BigNumberish,
      priceDiffientRatio: BigNumberish,
      dexs: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMarketLiquidationConfig"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      liquidationRate: BigNumberish,
      liquidaMaximumYield: BigNumberish,
      liquidaMinimumYield: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOpLimitOrder"
  ): TypedContractMethod<[_opLimitOrder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRouter1inch"
  ): TypedContractMethod<[_router1inch: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSupportDex"
  ): TypedContractMethod<
    [dex: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTaxRate"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      token: AddressLike,
      index: BigNumberish,
      tax: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTokenLiquidationFactor"
  ): TypedContractMethod<
    [token: AddressLike, factor: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePrice"
  ): TypedContractMethod<
    [marketId: BigNumberish, dexData: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}