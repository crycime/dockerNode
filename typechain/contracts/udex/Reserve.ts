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

export interface ReserveInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptAdmin"
      | "admin"
      | "developer"
      | "oleToken"
      | "pendingAdmin"
      | "setPendingAdmin"
      | "transfer"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NewAdmin" | "NewPendingAdmin" | "TransferTo"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "developer", values?: undefined): string;
  encodeFunctionData(functionFragment: "oleToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "developer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oleToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
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

export namespace TransferToEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Reserve extends BaseContract {
  connect(runner?: ContractRunner | null): Reserve;
  waitForDeployment(): Promise<this>;

  interface: ReserveInterface;

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

  developer: TypedContractMethod<[], [string], "view">;

  oleToken: TypedContractMethod<[], [string], "view">;

  pendingAdmin: TypedContractMethod<[], [string], "view">;

  setPendingAdmin: TypedContractMethod<
    [newPendingAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
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
    nameOrSignature: "developer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "oleToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setPendingAdmin"
  ): TypedContractMethod<[newPendingAdmin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
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
  getEvent(
    key: "TransferTo"
  ): TypedContractEvent<
    TransferToEvent.InputTuple,
    TransferToEvent.OutputTuple,
    TransferToEvent.OutputObject
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

    "TransferTo(address,uint256)": TypedContractEvent<
      TransferToEvent.InputTuple,
      TransferToEvent.OutputTuple,
      TransferToEvent.OutputObject
    >;
    TransferTo: TypedContractEvent<
      TransferToEvent.InputTuple,
      TransferToEvent.OutputTuple,
      TransferToEvent.OutputObject
    >;
  };
}
