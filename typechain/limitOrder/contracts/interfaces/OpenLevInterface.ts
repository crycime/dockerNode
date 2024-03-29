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
} from "../../common";

export declare namespace OpenLevInterface {
  export type TradeStruct = {
    deposited: BigNumberish;
    held: BigNumberish;
    depositToken: boolean;
    lastBlockNum: BigNumberish;
    heldRelativeBorrowed: BigNumberish;
  };

  export type TradeStructOutput = [
    deposited: bigint,
    held: bigint,
    depositToken: boolean,
    lastBlockNum: bigint,
    heldRelativeBorrowed: bigint
  ] & {
    deposited: bigint;
    held: bigint;
    depositToken: boolean;
    lastBlockNum: bigint;
    heldRelativeBorrowed: bigint;
  };

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

  export type MarketStruct = {
    pool0: AddressLike;
    pool1: AddressLike;
    token0: AddressLike;
    token1: AddressLike;
    marginLimit: BigNumberish;
    feesRate: BigNumberish;
    priceDiffientRatio: BigNumberish;
    priceUpdater: AddressLike;
    pool0Insurance: BigNumberish;
    pool1Insurance: BigNumberish;
  };

  export type MarketStructOutput = [
    pool0: string,
    pool1: string,
    token0: string,
    token1: string,
    marginLimit: bigint,
    feesRate: bigint,
    priceDiffientRatio: bigint,
    priceUpdater: string,
    pool0Insurance: bigint,
    pool1Insurance: bigint
  ] & {
    pool0: string;
    pool1: string;
    token0: string;
    token1: string;
    marginLimit: bigint;
    feesRate: bigint;
    priceDiffientRatio: bigint;
    priceUpdater: string;
    pool0Insurance: bigint;
    pool1Insurance: bigint;
  };
}

export interface OpenLevInterfaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeTrades"
      | "closeTradeFor"
      | "marginTradeFor"
      | "markets"
      | "updatePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeTrades",
    values: [AddressLike, BigNumberish, boolean]
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
    functionFragment: "marginTradeFor",
    values: [AddressLike, OpenLevInterface.MarginTradeVarsStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeTrades",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeTradeFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginTradeFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
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

  activeTrades: TypedContractMethod<
    [trader: AddressLike, marketId: BigNumberish, longToken: boolean],
    [OpenLevInterface.TradeStructOutput],
    "view"
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

  marginTradeFor: TypedContractMethod<
    [
      trader: AddressLike,
      tradeVars: OpenLevInterface.MarginTradeVarsStruct,
      dexData: BytesLike
    ],
    [bigint],
    "payable"
  >;

  markets: TypedContractMethod<
    [marketId: BigNumberish],
    [OpenLevInterface.MarketStructOutput],
    "view"
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
    nameOrSignature: "activeTrades"
  ): TypedContractMethod<
    [trader: AddressLike, marketId: BigNumberish, longToken: boolean],
    [OpenLevInterface.TradeStructOutput],
    "view"
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
    nameOrSignature: "marginTradeFor"
  ): TypedContractMethod<
    [
      trader: AddressLike,
      tradeVars: OpenLevInterface.MarginTradeVarsStruct,
      dexData: BytesLike
    ],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "markets"
  ): TypedContractMethod<
    [marketId: BigNumberish],
    [OpenLevInterface.MarketStructOutput],
    "view"
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
