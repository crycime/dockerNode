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

export interface MockOpBorrowingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeCollaterals"
      | "addMarket"
      | "marketId"
      | "pool0"
      | "pool1"
      | "setActiveBorrows"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeCollaterals",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addMarket",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "marketId", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool0", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setActiveBorrows",
    values: [AddressLike, BigNumberish, boolean, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeCollaterals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "marketId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setActiveBorrows",
    data: BytesLike
  ): Result;
}

export interface MockOpBorrowing extends BaseContract {
  connect(runner?: ContractRunner | null): MockOpBorrowing;
  waitForDeployment(): Promise<this>;

  interface: MockOpBorrowingInterface;

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

  activeCollaterals: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: boolean],
    [bigint],
    "view"
  >;

  addMarket: TypedContractMethod<
    [
      _marketId: BigNumberish,
      _pool0: AddressLike,
      _pool1: AddressLike,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  marketId: TypedContractMethod<[], [bigint], "view">;

  pool0: TypedContractMethod<[], [string], "view">;

  pool1: TypedContractMethod<[], [string], "view">;

  setActiveBorrows: TypedContractMethod<
    [
      borrower: AddressLike,
      marketId: BigNumberish,
      collateralIndex: boolean,
      collateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activeCollaterals"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: boolean],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "addMarket"
  ): TypedContractMethod<
    [
      _marketId: BigNumberish,
      _pool0: AddressLike,
      _pool1: AddressLike,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "marketId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pool0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pool1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setActiveBorrows"
  ): TypedContractMethod<
    [
      borrower: AddressLike,
      marketId: BigNumberish,
      collateralIndex: boolean,
      collateral: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
