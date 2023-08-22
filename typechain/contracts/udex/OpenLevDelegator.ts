/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface OpenLevDelegatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdmin"
      | "admin"
      | "delegateToImplementation"
      | "delegateToViewImplementation"
      | "developer"
      | "implementation"
      | "pendingAdmin"
      | "setImplementation"
      | "setPendingAdmin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NewAdmin" | "NewImplementation" | "NewPendingAdmin"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegateToImplementation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateToViewImplementation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "developer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setImplementation",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateToImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateToViewImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "developer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
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

export namespace NewImplementationEvent {
  export type InputTuple = [
    oldImplementation: AddressLike,
    newImplementation: AddressLike
  ];
  export type OutputTuple = [
    oldImplementation: string,
    newImplementation: string
  ];
  export interface OutputObject {
    oldImplementation: string;
    newImplementation: string;
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

export interface OpenLevDelegator extends BaseContract {
  connect(runner?: ContractRunner | null): OpenLevDelegator;
  waitForDeployment(): Promise<this>;

  interface: OpenLevDelegatorInterface;

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

  delegateToImplementation: TypedContractMethod<
    [data: BytesLike],
    [string],
    "nonpayable"
  >;

  delegateToViewImplementation: TypedContractMethod<
    [data: BytesLike],
    [string],
    "view"
  >;

  developer: TypedContractMethod<[], [string], "view">;

  implementation: TypedContractMethod<[], [string], "view">;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  setImplementation: TypedContractMethod<
    [implementation_: AddressLike],
    [void],
    "nonpayable"
  >;

  setPendingAdmin: TypedContractMethod<
    [newPendingAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

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
    nameOrSignature: "delegateToImplementation"
  ): TypedContractMethod<[data: BytesLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "delegateToViewImplementation"
  ): TypedContractMethod<[data: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "developer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setImplementation"
  ): TypedContractMethod<[implementation_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[newPendingAdmin: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "NewAdmin"
  ): TypedContractEvent<
    NewAdminEvent.InputTuple,
    NewAdminEvent.OutputTuple,
    NewAdminEvent.OutputObject
  >;
  getEvent(
    key: "NewImplementation"
  ): TypedContractEvent<
    NewImplementationEvent.InputTuple,
    NewImplementationEvent.OutputTuple,
    NewImplementationEvent.OutputObject
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

    "NewImplementation(address,address)": TypedContractEvent<
      NewImplementationEvent.InputTuple,
      NewImplementationEvent.OutputTuple,
      NewImplementationEvent.OutputObject
    >;
    NewImplementation: TypedContractEvent<
      NewImplementationEvent.InputTuple,
      NewImplementationEvent.OutputTuple,
      NewImplementationEvent.OutputObject
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
