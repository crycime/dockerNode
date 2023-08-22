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

export interface DelegateInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changeOwner"
      | "delegatePrivate"
      | "delegatePrivateConstant"
      | "delegatePrivateParam"
      | "initialize"
      | "owner"
      | "setDelegatePrivateParam"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegatePrivate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegatePrivateConstant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegatePrivateParam",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDelegatePrivateParam",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatePrivate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatePrivateConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegatePrivateParam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDelegatePrivateParam",
    data: BytesLike
  ): Result;
}

export interface Delegate extends BaseContract {
  connect(runner?: ContractRunner | null): Delegate;
  waitForDeployment(): Promise<this>;

  interface: DelegateInterface;

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

  changeOwner: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  delegatePrivate: TypedContractMethod<[], [bigint], "view">;

  delegatePrivateConstant: TypedContractMethod<[], [bigint], "view">;

  delegatePrivateParam: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  setDelegatePrivateParam: TypedContractMethod<
    [delegatePrivateParam_: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changeOwner"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "delegatePrivate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "delegatePrivateConstant"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "delegatePrivateParam"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setDelegatePrivateParam"
  ): TypedContractMethod<
    [delegatePrivateParam_: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
