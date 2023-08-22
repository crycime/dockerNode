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
} from "../../common";

export interface OPLimitOrderStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CLOSE_ORDER_TYPEHASH"
      | "OPEN_ORDER_TYPEHASH"
      | "ORDER_TYPEHASH"
      | "dexAgg"
      | "openLev"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OrderCanceled" | "OrderFilled"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CLOSE_ORDER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPEN_ORDER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORDER_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "dexAgg", values?: undefined): string;
  encodeFunctionData(functionFragment: "openLev", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "CLOSE_ORDER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPEN_ORDER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ORDER_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dexAgg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openLev", data: BytesLike): Result;
}

export namespace OrderCanceledEvent {
  export type InputTuple = [
    trader: AddressLike,
    orderId: BytesLike,
    remaining: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    orderId: string,
    remaining: bigint
  ];
  export interface OutputObject {
    trader: string;
    orderId: string;
    remaining: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderFilledEvent {
  export type InputTuple = [
    trader: AddressLike,
    orderId: BytesLike,
    commission: BigNumberish,
    remaining: BigNumberish,
    filling: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    orderId: string,
    commission: bigint,
    remaining: bigint,
    filling: bigint
  ];
  export interface OutputObject {
    trader: string;
    orderId: string;
    commission: bigint;
    remaining: bigint;
    filling: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OPLimitOrderStorage extends BaseContract {
  connect(runner?: ContractRunner | null): OPLimitOrderStorage;
  waitForDeployment(): Promise<this>;

  interface: OPLimitOrderStorageInterface;

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

  CLOSE_ORDER_TYPEHASH: TypedContractMethod<[], [string], "view">;

  OPEN_ORDER_TYPEHASH: TypedContractMethod<[], [string], "view">;

  ORDER_TYPEHASH: TypedContractMethod<[], [string], "view">;

  dexAgg: TypedContractMethod<[], [string], "view">;

  openLev: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CLOSE_ORDER_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OPEN_ORDER_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ORDER_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dexAgg"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "openLev"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "OrderCanceled"
  ): TypedContractEvent<
    OrderCanceledEvent.InputTuple,
    OrderCanceledEvent.OutputTuple,
    OrderCanceledEvent.OutputObject
  >;
  getEvent(
    key: "OrderFilled"
  ): TypedContractEvent<
    OrderFilledEvent.InputTuple,
    OrderFilledEvent.OutputTuple,
    OrderFilledEvent.OutputObject
  >;

  filters: {
    "OrderCanceled(address,bytes32,uint256)": TypedContractEvent<
      OrderCanceledEvent.InputTuple,
      OrderCanceledEvent.OutputTuple,
      OrderCanceledEvent.OutputObject
    >;
    OrderCanceled: TypedContractEvent<
      OrderCanceledEvent.InputTuple,
      OrderCanceledEvent.OutputTuple,
      OrderCanceledEvent.OutputObject
    >;

    "OrderFilled(address,bytes32,uint256,uint256,uint256)": TypedContractEvent<
      OrderFilledEvent.InputTuple,
      OrderFilledEvent.OutputTuple,
      OrderFilledEvent.OutputObject
    >;
    OrderFilled: TypedContractEvent<
      OrderFilledEvent.InputTuple,
      OrderFilledEvent.OutputTuple,
      OrderFilledEvent.OutputObject
    >;
  };
}
