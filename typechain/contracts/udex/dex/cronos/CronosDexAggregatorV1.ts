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
} from "../../../../common";

export interface CronosDexAggregatorV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdmin"
      | "admin"
      | "buy"
      | "calBuyAmount"
      | "calSellAmount"
      | "developer"
      | "dexInfo"
      | "getAvgPrice"
      | "getPairLiquidity"
      | "getPrice"
      | "getPriceCAvgPriceHAvgPrice"
      | "getToken0Liquidity"
      | "implementation"
      | "initialize"
      | "opBorrowing"
      | "openLev"
      | "pendingAdmin"
      | "sell"
      | "sellMul"
      | "setDexInfo"
      | "setOpBorrowing"
      | "setOpenLev"
      | "setPendingAdmin"
      | "uniV2PriceOracle"
      | "updatePriceOracle"
      | "updateV3Observation"
      | "vvsFactory"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NewAdmin" | "NewPendingAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calBuyAmount",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calSellAmount",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "developer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dexInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAvgPrice",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPairLiquidity",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceCAvgPriceHAvgPrice",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getToken0Liquidity",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
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
    functionFragment: "sell",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sellMul",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDexInfo",
    values: [BigNumberish[], AddressLike[], BigNumberish[]]
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
  encodeFunctionData(
    functionFragment: "uniV2PriceOracle",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceOracle",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateV3Observation",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vvsFactory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calBuyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calSellAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "developer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAvgPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPairLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceCAvgPriceHAvgPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getToken0Liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "opBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openLev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDexInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOpBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOpenLev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniV2PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateV3Observation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vvsFactory", data: BytesLike): Result;
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

export interface CronosDexAggregatorV1 extends BaseContract {
  connect(runner?: ContractRunner | null): CronosDexAggregatorV1;
  waitForDeployment(): Promise<this>;

  interface: CronosDexAggregatorV1Interface;

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

  admin: TypedContractMethod<[], [string], "view">;

  buy: TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      buyAmount: BigNumberish,
      maxSellAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  calBuyAmount: TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      sellAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;

  calSellAmount: TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      buyAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;

  developer: TypedContractMethod<[], [string], "view">;

  dexInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { factory: string; fees: bigint }],
    "view"
  >;

  getAvgPrice: TypedContractMethod<
    [
      desToken: AddressLike,
      quoteToken: AddressLike,
      secondsAgo: BigNumberish,
      data: BytesLike
    ],
    [
      [bigint, bigint, bigint] & {
        price: bigint;
        decimals: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  getPairLiquidity: TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, dexData: BytesLike],
    [[bigint, bigint] & { token0Liq: bigint; token1Liq: bigint }],
    "view"
  >;

  getPrice: TypedContractMethod<
    [desToken: AddressLike, quoteToken: AddressLike, data: BytesLike],
    [[bigint, bigint] & { price: bigint; decimals: bigint }],
    "view"
  >;

  getPriceCAvgPriceHAvgPrice: TypedContractMethod<
    [
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
    "view"
  >;

  getToken0Liquidity: TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, dexData: BytesLike],
    [bigint],
    "view"
  >;

  implementation: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [_vvsFactory: AddressLike, _unusedFactory: AddressLike],
    [void],
    "nonpayable"
  >;

  opBorrowing: TypedContractMethod<[], [string], "view">;

  openLev: TypedContractMethod<[], [string], "view">;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  sell: TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  sellMul: TypedContractMethod<
    [sellAmount: BigNumberish, minBuyAmount: BigNumberish, data: BytesLike],
    [bigint],
    "nonpayable"
  >;

  setDexInfo: TypedContractMethod<
    [dexName: BigNumberish[], factoryAddr: AddressLike[], fees: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  setOpBorrowing: TypedContractMethod<
    [_opBorrowing: AddressLike],
    [void],
    "nonpayable"
  >;

  setOpenLev: TypedContractMethod<
    [_openLev: AddressLike],
    [void],
    "nonpayable"
  >;

  setPendingAdmin: TypedContractMethod<
    [newPendingAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  uniV2PriceOracle: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        blockTimestampLast: bigint;
        price0: bigint;
        price1: bigint;
        price0CumulativeLast: bigint;
        price1CumulativeLast: bigint;
      }
    ],
    "view"
  >;

  updatePriceOracle: TypedContractMethod<
    [
      desToken: AddressLike,
      quoteToken: AddressLike,
      timeWindow: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;

  updateV3Observation: TypedContractMethod<
    [desToken: AddressLike, quoteToken: AddressLike, data: BytesLike],
    [void],
    "view"
  >;

  vvsFactory: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buy"
  ): TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      buyAmount: BigNumberish,
      maxSellAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "calBuyAmount"
  ): TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      sellAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calSellAmount"
  ): TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      buyTax: BigNumberish,
      sellTax: BigNumberish,
      buyAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "developer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dexInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { factory: string; fees: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAvgPrice"
  ): TypedContractMethod<
    [
      desToken: AddressLike,
      quoteToken: AddressLike,
      secondsAgo: BigNumberish,
      data: BytesLike
    ],
    [
      [bigint, bigint, bigint] & {
        price: bigint;
        decimals: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPairLiquidity"
  ): TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, dexData: BytesLike],
    [[bigint, bigint] & { token0Liq: bigint; token1Liq: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<
    [desToken: AddressLike, quoteToken: AddressLike, data: BytesLike],
    [[bigint, bigint] & { price: bigint; decimals: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPriceCAvgPriceHAvgPrice"
  ): TypedContractMethod<
    [
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
    "view"
  >;
  getFunction(
    nameOrSignature: "getToken0Liquidity"
  ): TypedContractMethod<
    [token0: AddressLike, token1: AddressLike, dexData: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_vvsFactory: AddressLike, _unusedFactory: AddressLike],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "sell"
  ): TypedContractMethod<
    [
      buyToken: AddressLike,
      sellToken: AddressLike,
      sellAmount: BigNumberish,
      minBuyAmount: BigNumberish,
      data: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sellMul"
  ): TypedContractMethod<
    [sellAmount: BigNumberish, minBuyAmount: BigNumberish, data: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDexInfo"
  ): TypedContractMethod<
    [dexName: BigNumberish[], factoryAddr: AddressLike[], fees: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOpBorrowing"
  ): TypedContractMethod<[_opBorrowing: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOpenLev"
  ): TypedContractMethod<[_openLev: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[newPendingAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "uniV2PriceOracle"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        blockTimestampLast: bigint;
        price0: bigint;
        price1: bigint;
        price0CumulativeLast: bigint;
        price1CumulativeLast: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "updatePriceOracle"
  ): TypedContractMethod<
    [
      desToken: AddressLike,
      quoteToken: AddressLike,
      timeWindow: BigNumberish,
      data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateV3Observation"
  ): TypedContractMethod<
    [desToken: AddressLike, quoteToken: AddressLike, data: BytesLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "vvsFactory"
  ): TypedContractMethod<[], [string], "view">;

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
