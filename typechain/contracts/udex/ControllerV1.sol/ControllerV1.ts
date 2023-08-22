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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ControllerV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdmin"
      | "addPublicPool"
      | "admin"
      | "baseRatePerBlock"
      | "borrowAllowed"
      | "borrowingSuspend"
      | "closeTradeAllowed"
      | "collBorrowAllowed"
      | "collLiquidateAllowed"
      | "collRedeemAllowed"
      | "collRepayAllowed"
      | "createLPoolPair"
      | "createOfficialLPoolPair"
      | "developer"
      | "dexAggregator"
      | "implementation"
      | "initialize"
      | "jumpMultiplierPerBlock"
      | "kink"
      | "lPoolRewardByAccounts"
      | "liquidateAllowed"
      | "lpoolDistributions"
      | "lpoolImplementation"
      | "lpoolPairs"
      | "lpoolUnAlloweds"
      | "marginTradeAllowed"
      | "marginTradeAllowedV2"
      | "marketExtraDistribution"
      | "marketSuspend"
      | "mintAllowed"
      | "multiplierPerBlock"
      | "oleToken"
      | "oleTokenDistribution"
      | "oleWethDexData"
      | "opBorrowing"
      | "openLev"
      | "pendingAdmin"
      | "publicPools"
      | "redeemAllowed"
      | "repayBorrowAllowed"
      | "setBorrowingSuspend"
      | "setDexAggregator"
      | "setInterestParam"
      | "setLPoolImplementation"
      | "setLPoolUnAllowed"
      | "setMarketSuspend"
      | "setOleWethDexData"
      | "setOpBorrowing"
      | "setOpenLev"
      | "setPendingAdmin"
      | "setSuspend"
      | "setSuspendAll"
      | "suspend"
      | "suspendAll"
      | "transferAllowed"
      | "updateInterestAllowed"
      | "updatePriceAllowed"
      | "wETH"
      | "xoleToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "LPoolPairCreated" | "NewAdmin" | "NewPendingAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addPublicPool",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baseRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAllowed",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowingSuspend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeTradeAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collBorrowAllowed",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "collLiquidateAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collRedeemAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collRepayAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createLPoolPair",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createOfficialLPoolPair",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "developer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dexAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "jumpMultiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kink", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lPoolRewardByAccounts",
    values: [AddressLike, boolean, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateAllowed",
    values: [BigNumberish, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lpoolDistributions",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "lpoolImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lpoolPairs",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lpoolUnAlloweds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marginTradeAllowed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marginTradeAllowedV2",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "marketExtraDistribution",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketSuspend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAllowed",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "multiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oleToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "oleTokenDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "oleWethDexData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "opBorrowing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "openLev", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicPools",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAllowed",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrowAllowed",
    values: [AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowingSuspend",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDexAggregator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestParam",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLPoolImplementation",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setLPoolUnAllowed",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketSuspend",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setOleWethDexData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOpBorrowing",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOpenLev",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setSuspend", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setSuspendAll",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "suspend", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "suspendAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferAllowed",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInterestAllowed",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceAllowed",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "wETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "xoleToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPublicPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowingSuspend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeTradeAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collBorrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collLiquidateAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collRedeemAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collRepayAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLPoolPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOfficialLPoolPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "developer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dexAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "jumpMultiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kink", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lPoolRewardByAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lpoolDistributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lpoolImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpoolPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lpoolUnAlloweds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginTradeAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marginTradeAllowedV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketExtraDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketSuspend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oleToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oleTokenDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oleWethDexData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "opBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openLev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "publicPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowingSuspend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDexAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestParam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLPoolImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLPoolUnAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketSuspend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOleWethDexData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOpBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOpenLev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSuspend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSuspendAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "suspend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "suspendAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInterestAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xoleToken", data: BytesLike): Result;
}

export namespace LPoolPairCreatedEvent {
  export type InputTuple = [
    token0: AddressLike,
    pool0: AddressLike,
    token1: AddressLike,
    pool1: AddressLike,
    marketId: BigNumberish,
    marginLimit: BigNumberish,
    dexData: BytesLike
  ];
  export type OutputTuple = [
    token0: string,
    pool0: string,
    token1: string,
    pool1: string,
    marketId: bigint,
    marginLimit: bigint,
    dexData: string
  ];
  export interface OutputObject {
    token0: string;
    pool0: string;
    token1: string;
    pool1: string;
    marketId: bigint;
    marginLimit: bigint;
    dexData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewAdminEvent {
  export type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [oldAdmin: string, newAdmin: string];
  export interface OutputObject {
    oldAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewPendingAdminEvent {
  export type InputTuple = [
    oldPendingAdmin: AddressLike,
    newPendingAdmin: AddressLike
  ];
  export type OutputTuple = [oldPendingAdmin: string, newPendingAdmin: string];
  export interface OutputObject {
    oldPendingAdmin: string;
    newPendingAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ControllerV1 extends BaseContract {
  connect(runner?: ContractRunner | null): ControllerV1;
  waitForDeployment(): Promise<this>;

  interface: ControllerV1Interface;

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

  acceptAdmin: TypedContractMethod<[], [void], "nonpayable">;

  addPublicPool: TypedContractMethod<
    [token: AddressLike, lpool: AddressLike],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  baseRatePerBlock: TypedContractMethod<[], [bigint], "view">;

  borrowAllowed: TypedContractMethod<
    [borrower: AddressLike, payee: AddressLike, borrowAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  borrowingSuspend: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  closeTradeAllowed: TypedContractMethod<
    [marketId: BigNumberish],
    [boolean],
    "view"
  >;

  collBorrowAllowed: TypedContractMethod<
    [marketId: BigNumberish, borrower: AddressLike, collateralIndex: boolean],
    [boolean],
    "view"
  >;

  collLiquidateAllowed: TypedContractMethod<
    [marketId: BigNumberish],
    [boolean],
    "view"
  >;

  collRedeemAllowed: TypedContractMethod<
    [marketId: BigNumberish],
    [boolean],
    "view"
  >;

  collRepayAllowed: TypedContractMethod<
    [marketId: BigNumberish],
    [boolean],
    "view"
  >;

  createLPoolPair: TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  createOfficialLPoolPair: TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  developer: TypedContractMethod<[], [string], "view">;

  dexAggregator: TypedContractMethod<[], [string], "view">;

  implementation: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      _oleToken: AddressLike,
      _xoleToken: AddressLike,
      _wETH: AddressLike,
      _lpoolImplementation: AddressLike,
      _openlev: AddressLike,
      _dexAggregator: AddressLike,
      _oleWethDexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  jumpMultiplierPerBlock: TypedContractMethod<[], [bigint], "view">;

  kink: TypedContractMethod<[], [bigint], "view">;

  lPoolRewardByAccounts: TypedContractMethod<
    [arg0: AddressLike, arg1: boolean, arg2: AddressLike],
    [
      [bigint, bigint, bigint] & {
        rewardPerTokenStored: bigint;
        rewards: bigint;
        extraToken: bigint;
      }
    ],
    "view"
  >;

  liquidateAllowed: TypedContractMethod<
    [
      marketId: BigNumberish,
      liquidator: AddressLike,
      liquidateAmount: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  lpoolDistributions: TypedContractMethod<
    [arg0: AddressLike, arg1: boolean],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        startTime: bigint;
        endTime: bigint;
        duration: bigint;
        lastUpdateTime: bigint;
        totalRewardAmount: bigint;
        rewardRate: bigint;
        rewardPerTokenStored: bigint;
        extraTotalToken: bigint;
      }
    ],
    "view"
  >;

  lpoolImplementation: TypedContractMethod<[], [string], "view">;

  lpoolPairs: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [[string, string] & { lpool0: string; lpool1: string }],
    "view"
  >;

  lpoolUnAlloweds: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  marginTradeAllowed: TypedContractMethod<
    [marketId: BigNumberish],
    [boolean],
    "view"
  >;

  marginTradeAllowedV2: TypedContractMethod<
    [marketId: BigNumberish, trader: AddressLike, longToken: boolean],
    [boolean],
    "view"
  >;

  marketExtraDistribution: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  marketSuspend: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  mintAllowed: TypedContractMethod<
    [minter: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  multiplierPerBlock: TypedContractMethod<[], [bigint], "view">;

  oleToken: TypedContractMethod<[], [string], "view">;

  oleTokenDistribution: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        supplyBorrowBalance: bigint;
        extraBalance: bigint;
        updatePricePer: bigint;
        liquidatorMaxPer: bigint;
        liquidatorOLERatio: bigint;
        xoleRaiseRatio: bigint;
        xoleRaiseMinAmount: bigint;
      }
    ],
    "view"
  >;

  oleWethDexData: TypedContractMethod<[], [string], "view">;

  opBorrowing: TypedContractMethod<[], [string], "view">;

  openLev: TypedContractMethod<[], [string], "view">;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  publicPools: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  redeemAllowed: TypedContractMethod<
    [redeemer: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  repayBorrowAllowed: TypedContractMethod<
    [
      payer: AddressLike,
      borrower: AddressLike,
      repayAmount: BigNumberish,
      isEnd: boolean
    ],
    [void],
    "nonpayable"
  >;

  setBorrowingSuspend: TypedContractMethod<
    [marketId: BigNumberish, suspend: boolean],
    [void],
    "nonpayable"
  >;

  setDexAggregator: TypedContractMethod<
    [_dexAggregator: AddressLike],
    [void],
    "nonpayable"
  >;

  setInterestParam: TypedContractMethod<
    [
      _baseRatePerBlock: BigNumberish,
      _multiplierPerBlock: BigNumberish,
      _jumpMultiplierPerBlock: BigNumberish,
      _kink: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setLPoolImplementation: TypedContractMethod<
    [_lpoolImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  setLPoolUnAllowed: TypedContractMethod<
    [lpool: AddressLike, unAllowed: boolean],
    [void],
    "nonpayable"
  >;

  setMarketSuspend: TypedContractMethod<
    [marketId: BigNumberish, suspend: boolean],
    [void],
    "nonpayable"
  >;

  setOleWethDexData: TypedContractMethod<
    [_oleWethDexData: BytesLike],
    [void],
    "nonpayable"
  >;

  setOpBorrowing: TypedContractMethod<
    [_opBorrowing: AddressLike],
    [void],
    "nonpayable"
  >;

  setOpenLev: TypedContractMethod<
    [_openlev: AddressLike],
    [void],
    "nonpayable"
  >;

  setPendingAdmin: TypedContractMethod<
    [newPendingAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  setSuspend: TypedContractMethod<[_uspend: boolean], [void], "nonpayable">;

  setSuspendAll: TypedContractMethod<[_uspend: boolean], [void], "nonpayable">;

  suspend: TypedContractMethod<[], [boolean], "view">;

  suspendAll: TypedContractMethod<[], [boolean], "view">;

  transferAllowed: TypedContractMethod<
    [from: AddressLike, to: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateInterestAllowed: TypedContractMethod<
    [sender: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePriceAllowed: TypedContractMethod<
    [marketId: BigNumberish, payee: AddressLike],
    [void],
    "nonpayable"
  >;

  wETH: TypedContractMethod<[], [string], "view">;

  xoleToken: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addPublicPool"
  ): TypedContractMethod<
    [token: AddressLike, lpool: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "baseRatePerBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "borrowAllowed"
  ): TypedContractMethod<
    [borrower: AddressLike, payee: AddressLike, borrowAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "borrowingSuspend"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "closeTradeAllowed"
  ): TypedContractMethod<[marketId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "collBorrowAllowed"
  ): TypedContractMethod<
    [marketId: BigNumberish, borrower: AddressLike, collateralIndex: boolean],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "collLiquidateAllowed"
  ): TypedContractMethod<[marketId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "collRedeemAllowed"
  ): TypedContractMethod<[marketId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "collRepayAllowed"
  ): TypedContractMethod<[marketId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "createLPoolPair"
  ): TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createOfficialLPoolPair"
  ): TypedContractMethod<
    [
      token0: AddressLike,
      token1: AddressLike,
      marginLimit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "developer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dexAggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _oleToken: AddressLike,
      _xoleToken: AddressLike,
      _wETH: AddressLike,
      _lpoolImplementation: AddressLike,
      _openlev: AddressLike,
      _dexAggregator: AddressLike,
      _oleWethDexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "jumpMultiplierPerBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "kink"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lPoolRewardByAccounts"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: boolean, arg2: AddressLike],
    [
      [bigint, bigint, bigint] & {
        rewardPerTokenStored: bigint;
        rewards: bigint;
        extraToken: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidateAllowed"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      liquidator: AddressLike,
      liquidateAmount: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lpoolDistributions"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: boolean],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        startTime: bigint;
        endTime: bigint;
        duration: bigint;
        lastUpdateTime: bigint;
        totalRewardAmount: bigint;
        rewardRate: bigint;
        rewardPerTokenStored: bigint;
        extraTotalToken: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "lpoolImplementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lpoolPairs"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [[string, string] & { lpool0: string; lpool1: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "lpoolUnAlloweds"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "marginTradeAllowed"
  ): TypedContractMethod<[marketId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "marginTradeAllowedV2"
  ): TypedContractMethod<
    [marketId: BigNumberish, trader: AddressLike, longToken: boolean],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketExtraDistribution"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "marketSuspend"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "mintAllowed"
  ): TypedContractMethod<
    [minter: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "multiplierPerBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "oleToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oleTokenDistribution"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint] & {
        supplyBorrowBalance: bigint;
        extraBalance: bigint;
        updatePricePer: bigint;
        liquidatorMaxPer: bigint;
        liquidatorOLERatio: bigint;
        xoleRaiseRatio: bigint;
        xoleRaiseMinAmount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "oleWethDexData"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "opBorrowing"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "openLev"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "publicPools"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "redeemAllowed"
  ): TypedContractMethod<
    [redeemer: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "repayBorrowAllowed"
  ): TypedContractMethod<
    [
      payer: AddressLike,
      borrower: AddressLike,
      repayAmount: BigNumberish,
      isEnd: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBorrowingSuspend"
  ): TypedContractMethod<
    [marketId: BigNumberish, suspend: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDexAggregator"
  ): TypedContractMethod<[_dexAggregator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setInterestParam"
  ): TypedContractMethod<
    [
      _baseRatePerBlock: BigNumberish,
      _multiplierPerBlock: BigNumberish,
      _jumpMultiplierPerBlock: BigNumberish,
      _kink: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLPoolImplementation"
  ): TypedContractMethod<
    [_lpoolImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLPoolUnAllowed"
  ): TypedContractMethod<
    [lpool: AddressLike, unAllowed: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMarketSuspend"
  ): TypedContractMethod<
    [marketId: BigNumberish, suspend: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOleWethDexData"
  ): TypedContractMethod<[_oleWethDexData: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOpBorrowing"
  ): TypedContractMethod<[_opBorrowing: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOpenLev"
  ): TypedContractMethod<[_openlev: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[newPendingAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSuspend"
  ): TypedContractMethod<[_uspend: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSuspendAll"
  ): TypedContractMethod<[_uspend: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "suspend"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "suspendAll"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferAllowed"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, lTokenAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateInterestAllowed"
  ): TypedContractMethod<[sender: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePriceAllowed"
  ): TypedContractMethod<
    [marketId: BigNumberish, payee: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "wETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "xoleToken"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "LPoolPairCreated"
  ): TypedContractEvent<
    LPoolPairCreatedEvent.InputTuple,
    LPoolPairCreatedEvent.OutputTuple,
    LPoolPairCreatedEvent.OutputObject
  >;
  getEvent(
    key: "NewAdmin"
  ): TypedContractEvent<
    NewAdminEvent.InputTuple,
    NewAdminEvent.OutputTuple,
    NewAdminEvent.OutputObject
  >;
  getEvent(
    key: "NewPendingAdmin"
  ): TypedContractEvent<
    NewPendingAdminEvent.InputTuple,
    NewPendingAdminEvent.OutputTuple,
    NewPendingAdminEvent.OutputObject
  >;

  filters: {
    "LPoolPairCreated(address,address,address,address,uint16,uint16,bytes)": TypedContractEvent<
      LPoolPairCreatedEvent.InputTuple,
      LPoolPairCreatedEvent.OutputTuple,
      LPoolPairCreatedEvent.OutputObject
    >;
    LPoolPairCreated: TypedContractEvent<
      LPoolPairCreatedEvent.InputTuple,
      LPoolPairCreatedEvent.OutputTuple,
      LPoolPairCreatedEvent.OutputObject
    >;

    "NewAdmin(address,address)": TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;
    NewAdmin: TypedContractEvent<
      NewAdminEvent.InputTuple,
      NewAdminEvent.OutputTuple,
      NewAdminEvent.OutputObject
    >;

    "NewPendingAdmin(address,address)": TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;
    NewPendingAdmin: TypedContractEvent<
      NewPendingAdminEvent.InputTuple,
      NewPendingAdminEvent.OutputTuple,
      NewPendingAdminEvent.OutputObject
    >;
  };
}
