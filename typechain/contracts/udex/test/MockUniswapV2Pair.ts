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

export interface MockUniswapV2PairInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_blockTimestampLast"
      | "_price0CumulativeLast"
      | "_price1CumulativeLast"
      | "_reserve0"
      | "_reserve1"
      | "getReserves"
      | "price0CumulativeLast"
      | "price1CumulativeLast"
      | "setPrice"
      | "setPrice0CumulativeLast"
      | "setPrice1CumulativeLast"
      | "setPriceUpdateAfter"
      | "swap"
      | "sync"
      | "token0"
      | "token1"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_blockTimestampLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_reserve0", values?: undefined): string;
  encodeFunctionData(functionFragment: "_reserve1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice0CumulativeLast",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrice1CumulativeLast",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceUpdateAfter",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "_blockTimestampLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_reserve0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_reserve1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPrice0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrice1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceUpdateAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}

export interface MockUniswapV2Pair extends BaseContract {
  connect(runner?: ContractRunner | null): MockUniswapV2Pair;
  waitForDeployment(): Promise<this>;

  interface: MockUniswapV2PairInterface;

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

  _blockTimestampLast: TypedContractMethod<[], [bigint], "view">;

  _price0CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  _price1CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  _reserve0: TypedContractMethod<[], [bigint], "view">;

  _reserve1: TypedContractMethod<[], [bigint], "view">;

  getReserves: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        reserve0: bigint;
        reserve1: bigint;
        blockTimestampLast: bigint;
      }
    ],
    "view"
  >;

  price0CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  price1CumulativeLast: TypedContractMethod<[], [bigint], "view">;

  setPrice: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPrice0CumulativeLast: TypedContractMethod<
    [_price: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPrice1CumulativeLast: TypedContractMethod<
    [_price: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPriceUpdateAfter: TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  sync: TypedContractMethod<[], [void], "nonpayable">;

  token0: TypedContractMethod<[], [string], "view">;

  token1: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_blockTimestampLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_price0CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_price1CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_reserve0"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_reserve1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getReserves"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        reserve0: bigint;
        reserve1: bigint;
        blockTimestampLast: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "price0CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "price1CumulativeLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setPrice"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPrice0CumulativeLast"
  ): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPrice1CumulativeLast"
  ): TypedContractMethod<[_price: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPriceUpdateAfter"
  ): TypedContractMethod<
    [tokenA: AddressLike, tokenB: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sync"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token1"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
