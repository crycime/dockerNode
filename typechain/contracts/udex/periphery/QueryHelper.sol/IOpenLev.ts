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
} from "../../../../common";

export declare namespace Types {
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
}

export declare namespace IOpenLev {
  export type AddressConfigStruct = {
    dexAggregator: AddressLike;
    controller: AddressLike;
    wETH: AddressLike;
    xOLE: AddressLike;
  };

  export type AddressConfigStructOutput = [
    dexAggregator: string,
    controller: string,
    wETH: string,
    xOLE: string
  ] & { dexAggregator: string; controller: string; wETH: string; xOLE: string };

  export type CalculateConfigStruct = {
    defaultFeesRate: BigNumberish;
    insuranceRatio: BigNumberish;
    defaultMarginLimit: BigNumberish;
    priceDiffientRatio: BigNumberish;
    updatePriceDiscount: BigNumberish;
    feesDiscount: BigNumberish;
    feesDiscountThreshold: BigNumberish;
    penaltyRatio: BigNumberish;
    maxLiquidationPriceDiffientRatio: BigNumberish;
    twapDuration: BigNumberish;
  };

  export type CalculateConfigStructOutput = [
    defaultFeesRate: bigint,
    insuranceRatio: bigint,
    defaultMarginLimit: bigint,
    priceDiffientRatio: bigint,
    updatePriceDiscount: bigint,
    feesDiscount: bigint,
    feesDiscountThreshold: bigint,
    penaltyRatio: bigint,
    maxLiquidationPriceDiffientRatio: bigint,
    twapDuration: bigint
  ] & {
    defaultFeesRate: bigint;
    insuranceRatio: bigint;
    defaultMarginLimit: bigint;
    priceDiffientRatio: bigint;
    updatePriceDiscount: bigint;
    feesDiscount: bigint;
    feesDiscountThreshold: bigint;
    penaltyRatio: bigint;
    maxLiquidationPriceDiffientRatio: bigint;
    twapDuration: bigint;
  };

  export type MarketVarStruct = {
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

  export type MarketVarStructOutput = [
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

export interface IOpenLevInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeTrades"
      | "addressConfig"
      | "calculateConfig"
      | "getMarketSupportDexs"
      | "marginRatio"
      | "markets"
      | "taxes"
      | "totalHelds"
      | "updatePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeTrades",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addressConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketSupportDexs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marginRatio",
    values: [AddressLike, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxes",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalHelds",
    values: [AddressLike]
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
    functionFragment: "addressConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketSupportDexs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "taxes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalHelds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
}

export interface IOpenLev extends BaseContract {
  connect(runner?: ContractRunner | null): IOpenLev;
  waitForDeployment(): Promise<this>;

  interface: IOpenLevInterface;

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
    [owner: AddressLike, marketId: BigNumberish, longToken: boolean],
    [Types.TradeStructOutput],
    "view"
  >;

  addressConfig: TypedContractMethod<
    [],
    [IOpenLev.AddressConfigStructOutput],
    "view"
  >;

  calculateConfig: TypedContractMethod<
    [],
    [IOpenLev.CalculateConfigStructOutput],
    "view"
  >;

  getMarketSupportDexs: TypedContractMethod<
    [marketId: BigNumberish],
    [bigint[]],
    "view"
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

  markets: TypedContractMethod<
    [marketId: BigNumberish],
    [IOpenLev.MarketVarStructOutput],
    "view"
  >;

  taxes: TypedContractMethod<
    [marketId: BigNumberish, token: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  totalHelds: TypedContractMethod<[token: AddressLike], [bigint], "view">;

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
    [owner: AddressLike, marketId: BigNumberish, longToken: boolean],
    [Types.TradeStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "addressConfig"
  ): TypedContractMethod<[], [IOpenLev.AddressConfigStructOutput], "view">;
  getFunction(
    nameOrSignature: "calculateConfig"
  ): TypedContractMethod<[], [IOpenLev.CalculateConfigStructOutput], "view">;
  getFunction(
    nameOrSignature: "getMarketSupportDexs"
  ): TypedContractMethod<[marketId: BigNumberish], [bigint[]], "view">;
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
    nameOrSignature: "markets"
  ): TypedContractMethod<
    [marketId: BigNumberish],
    [IOpenLev.MarketVarStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "taxes"
  ): TypedContractMethod<
    [marketId: BigNumberish, token: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalHelds"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "updatePrice"
  ): TypedContractMethod<
    [marketId: BigNumberish, dexData: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
