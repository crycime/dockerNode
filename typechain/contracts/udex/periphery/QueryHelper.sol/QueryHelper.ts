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

export declare namespace QueryHelper {
  export type BalanceStruct = {
    balance: BigNumberish;
    totalHelds: BigNumberish;
  };

  export type BalanceStructOutput = [balance: bigint, totalHelds: bigint] & {
    balance: bigint;
    totalHelds: bigint;
  };

  export type PoolVarsStruct = {
    totalBorrows: BigNumberish;
    cash: BigNumberish;
    totalReserves: BigNumberish;
    availableForBorrow: BigNumberish;
    insurance: BigNumberish;
    supplyRatePerBlock: BigNumberish;
    borrowRatePerBlock: BigNumberish;
    reserveFactorMantissa: BigNumberish;
    exchangeRate: BigNumberish;
    baseRatePerBlock: BigNumberish;
    multiplierPerBlock: BigNumberish;
    jumpMultiplierPerBlock: BigNumberish;
    kink: BigNumberish;
  };

  export type PoolVarsStructOutput = [
    totalBorrows: bigint,
    cash: bigint,
    totalReserves: bigint,
    availableForBorrow: bigint,
    insurance: bigint,
    supplyRatePerBlock: bigint,
    borrowRatePerBlock: bigint,
    reserveFactorMantissa: bigint,
    exchangeRate: bigint,
    baseRatePerBlock: bigint,
    multiplierPerBlock: bigint,
    jumpMultiplierPerBlock: bigint,
    kink: bigint
  ] & {
    totalBorrows: bigint;
    cash: bigint;
    totalReserves: bigint;
    availableForBorrow: bigint;
    insurance: bigint;
    supplyRatePerBlock: bigint;
    borrowRatePerBlock: bigint;
    reserveFactorMantissa: bigint;
    exchangeRate: bigint;
    baseRatePerBlock: bigint;
    multiplierPerBlock: bigint;
    jumpMultiplierPerBlock: bigint;
    kink: bigint;
  };

  export type LiqVarsStruct = {
    status: BigNumberish;
    lastUpdateTime: BigNumberish;
    currentMarginRatio: BigNumberish;
    cAvgMarginRatio: BigNumberish;
    hAvgMarginRatio: BigNumberish;
    marginLimit: BigNumberish;
  };

  export type LiqVarsStructOutput = [
    status: bigint,
    lastUpdateTime: bigint,
    currentMarginRatio: bigint,
    cAvgMarginRatio: bigint,
    hAvgMarginRatio: bigint,
    marginLimit: bigint
  ] & {
    status: bigint;
    lastUpdateTime: bigint;
    currentMarginRatio: bigint;
    cAvgMarginRatio: bigint;
    hAvgMarginRatio: bigint;
    marginLimit: bigint;
  };

  export type PositionVarsStruct = {
    deposited: BigNumberish;
    held: BigNumberish;
    borrowed: BigNumberish;
    marginRatio: BigNumberish;
    marginLimit: BigNumberish;
  };

  export type PositionVarsStructOutput = [
    deposited: bigint,
    held: bigint,
    borrowed: bigint,
    marginRatio: bigint,
    marginLimit: bigint
  ] & {
    deposited: bigint;
    held: bigint;
    borrowed: bigint;
    marginRatio: bigint;
    marginLimit: bigint;
  };

  export type XOLEVarsStruct = {
    totalStaked: BigNumberish;
    totalShared: BigNumberish;
    tranferedToAccount: BigNumberish;
    devFund: BigNumberish;
    balanceOf: BigNumberish;
  };

  export type XOLEVarsStructOutput = [
    totalStaked: bigint,
    totalShared: bigint,
    tranferedToAccount: bigint,
    devFund: bigint,
    balanceOf: bigint
  ] & {
    totalStaked: bigint;
    totalShared: bigint;
    tranferedToAccount: bigint;
    devFund: bigint;
    balanceOf: bigint;
  };
}

export interface QueryHelperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calPriceCAvgPriceHAvgPrice"
      | "getLiqCallData"
      | "getOpenLevBalances"
      | "getPoolDetails"
      | "getTraderLiqs"
      | "getTraderPositons"
      | "getXOLEDetail"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calPriceCAvgPriceHAvgPrice",
    values: [
      AddressLike,
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiqCallData",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      boolean,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenLevBalances",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolDetails",
    values: [AddressLike, BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderLiqs",
    values: [AddressLike, BigNumberish, AddressLike[], boolean[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderPositons",
    values: [AddressLike, BigNumberish, AddressLike[], boolean[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getXOLEDetail",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calPriceCAvgPriceHAvgPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiqCallData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenLevBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTraderLiqs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTraderPositons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getXOLEDetail",
    data: BytesLike
  ): Result;
}

export interface QueryHelper extends BaseContract {
  connect(runner?: ContractRunner | null): QueryHelper;
  waitForDeployment(): Promise<this>;

  interface: QueryHelperInterface;

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

  calPriceCAvgPriceHAvgPrice: TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      desToken: AddressLike,
      quoteToken: AddressLike,
      secondsAgo: BigNumberish,
      dexData: BytesLike
    ],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        price: bigint;
        cAvgPrice: bigint;
        hAvgPrice: bigint;
        decimals: bigint;
        timestamp: bigint;
      }
    ],
    "nonpayable"
  >;

  getLiqCallData: TypedContractMethod<
    [
      openLev: AddressLike,
      v3Quoter: AddressLike,
      marketId: BigNumberish,
      slippage: BigNumberish,
      trader: AddressLike,
      longToken: boolean,
      dexData: BytesLike
    ],
    [[bigint, bigint] & { minBuy: bigint; maxSell: bigint }],
    "nonpayable"
  >;

  getOpenLevBalances: TypedContractMethod<
    [openLev: AddressLike, tokens: AddressLike[]],
    [QueryHelper.BalanceStructOutput[]],
    "view"
  >;

  getPoolDetails: TypedContractMethod<
    [openLev: AddressLike, marketIds: BigNumberish[], pools: AddressLike[]],
    [QueryHelper.PoolVarsStructOutput[]],
    "view"
  >;

  getTraderLiqs: TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      traders: AddressLike[],
      longTokens: boolean[],
      dexData: BytesLike
    ],
    [QueryHelper.LiqVarsStructOutput[]],
    "nonpayable"
  >;

  getTraderPositons: TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      traders: AddressLike[],
      longTokens: boolean[],
      dexData: BytesLike
    ],
    [QueryHelper.PositionVarsStructOutput[]],
    "view"
  >;

  getXOLEDetail: TypedContractMethod<
    [xole: AddressLike, balanceOfToken: AddressLike],
    [QueryHelper.XOLEVarsStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calPriceCAvgPriceHAvgPrice"
  ): TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      desToken: AddressLike,
      quoteToken: AddressLike,
      secondsAgo: BigNumberish,
      dexData: BytesLike
    ],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        price: bigint;
        cAvgPrice: bigint;
        hAvgPrice: bigint;
        decimals: bigint;
        timestamp: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getLiqCallData"
  ): TypedContractMethod<
    [
      openLev: AddressLike,
      v3Quoter: AddressLike,
      marketId: BigNumberish,
      slippage: BigNumberish,
      trader: AddressLike,
      longToken: boolean,
      dexData: BytesLike
    ],
    [[bigint, bigint] & { minBuy: bigint; maxSell: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getOpenLevBalances"
  ): TypedContractMethod<
    [openLev: AddressLike, tokens: AddressLike[]],
    [QueryHelper.BalanceStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPoolDetails"
  ): TypedContractMethod<
    [openLev: AddressLike, marketIds: BigNumberish[], pools: AddressLike[]],
    [QueryHelper.PoolVarsStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTraderLiqs"
  ): TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      traders: AddressLike[],
      longTokens: boolean[],
      dexData: BytesLike
    ],
    [QueryHelper.LiqVarsStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getTraderPositons"
  ): TypedContractMethod<
    [
      openLev: AddressLike,
      marketId: BigNumberish,
      traders: AddressLike[],
      longTokens: boolean[],
      dexData: BytesLike
    ],
    [QueryHelper.PositionVarsStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getXOLEDetail"
  ): TypedContractMethod<
    [xole: AddressLike, balanceOfToken: AddressLike],
    [QueryHelper.XOLEVarsStructOutput],
    "view"
  >;

  filters: {};
}