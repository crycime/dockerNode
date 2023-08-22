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
} from "../../common";

export declare namespace OPLimitOrderStorage {
  export type OrderStruct = {
    salt: BigNumberish;
    owner: AddressLike;
    deadline: BigNumberish;
    marketId: BigNumberish;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: AddressLike;
    commission: BigNumberish;
    price0: BigNumberish;
  };

  export type OrderStructOutput = [
    salt: bigint,
    owner: string,
    deadline: bigint,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    commissionToken: string,
    commission: bigint,
    price0: bigint
  ] & {
    salt: bigint;
    owner: string;
    deadline: bigint;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: bigint;
    price0: bigint;
  };

  export type CloseOrderStruct = {
    salt: BigNumberish;
    owner: AddressLike;
    deadline: BigNumberish;
    marketId: BigNumberish;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: AddressLike;
    commission: BigNumberish;
    price0: BigNumberish;
    isStopLoss: boolean;
    closeHeld: BigNumberish;
    expectReturn: BigNumberish;
  };

  export type CloseOrderStructOutput = [
    salt: bigint,
    owner: string,
    deadline: bigint,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    commissionToken: string,
    commission: bigint,
    price0: bigint,
    isStopLoss: boolean,
    closeHeld: bigint,
    expectReturn: bigint
  ] & {
    salt: bigint;
    owner: string;
    deadline: bigint;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: bigint;
    price0: bigint;
    isStopLoss: boolean;
    closeHeld: bigint;
    expectReturn: bigint;
  };

  export type OpenOrderStruct = {
    salt: BigNumberish;
    owner: AddressLike;
    deadline: BigNumberish;
    marketId: BigNumberish;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: AddressLike;
    commission: BigNumberish;
    price0: BigNumberish;
    deposit: BigNumberish;
    borrow: BigNumberish;
    expectHeld: BigNumberish;
  };

  export type OpenOrderStructOutput = [
    salt: bigint,
    owner: string,
    deadline: bigint,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    commissionToken: string,
    commission: bigint,
    price0: bigint,
    deposit: bigint,
    borrow: bigint,
    expectHeld: bigint
  ] & {
    salt: bigint;
    owner: string;
    deadline: bigint;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    commissionToken: string;
    commission: bigint;
    price0: bigint;
    deposit: bigint;
    borrow: bigint;
    expectHeld: bigint;
  };
}

export interface IOPLimitOrderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cancelOrder"
      | "cancelOrders"
      | "closeTradeAndCancel"
      | "fillCloseOrder"
      | "fillOpenOrder"
      | "getOrderId"
      | "hashCloseOrder"
      | "hashOpenOrder"
      | "remaining"
      | "remainingRaw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [OPLimitOrderStorage.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrders",
    values: [OPLimitOrderStorage.OrderStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "closeTradeAndCancel",
    values: [
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish,
      BytesLike,
      OPLimitOrderStorage.OrderStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fillCloseOrder",
    values: [
      OPLimitOrderStorage.CloseOrderStruct,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fillOpenOrder",
    values: [
      OPLimitOrderStorage.OpenOrderStruct,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderId",
    values: [OPLimitOrderStorage.OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashCloseOrder",
    values: [OPLimitOrderStorage.CloseOrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOpenOrder",
    values: [OPLimitOrderStorage.OpenOrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "remaining",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingRaw",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeTradeAndCancel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillCloseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillOpenOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOrderId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashCloseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashOpenOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remaining", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remainingRaw",
    data: BytesLike
  ): Result;
}

export interface IOPLimitOrder extends BaseContract {
  connect(runner?: ContractRunner | null): IOPLimitOrder;
  waitForDeployment(): Promise<this>;

  interface: IOPLimitOrderInterface;

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

  cancelOrder: TypedContractMethod<
    [order: OPLimitOrderStorage.OrderStruct],
    [void],
    "nonpayable"
  >;

  cancelOrders: TypedContractMethod<
    [orders: OPLimitOrderStorage.OrderStruct[]],
    [void],
    "nonpayable"
  >;

  closeTradeAndCancel: TypedContractMethod<
    [
      marketId: BigNumberish,
      longToken: boolean,
      closeHeld: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike,
      orders: OPLimitOrderStorage.OrderStruct[]
    ],
    [void],
    "nonpayable"
  >;

  fillCloseOrder: TypedContractMethod<
    [
      order: OPLimitOrderStorage.CloseOrderStruct,
      signature: BytesLike,
      fillingHeld: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  fillOpenOrder: TypedContractMethod<
    [
      order: OPLimitOrderStorage.OpenOrderStruct,
      signature: BytesLike,
      fillingDeposit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getOrderId: TypedContractMethod<
    [order: OPLimitOrderStorage.OrderStruct],
    [string],
    "view"
  >;

  hashCloseOrder: TypedContractMethod<
    [order: OPLimitOrderStorage.CloseOrderStruct],
    [string],
    "view"
  >;

  hashOpenOrder: TypedContractMethod<
    [order: OPLimitOrderStorage.OpenOrderStruct],
    [string],
    "view"
  >;

  remaining: TypedContractMethod<[_orderId: BytesLike], [bigint], "view">;

  remainingRaw: TypedContractMethod<[_orderId: BytesLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cancelOrder"
  ): TypedContractMethod<
    [order: OPLimitOrderStorage.OrderStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelOrders"
  ): TypedContractMethod<
    [orders: OPLimitOrderStorage.OrderStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closeTradeAndCancel"
  ): TypedContractMethod<
    [
      marketId: BigNumberish,
      longToken: boolean,
      closeHeld: BigNumberish,
      minOrMaxAmount: BigNumberish,
      dexData: BytesLike,
      orders: OPLimitOrderStorage.OrderStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fillCloseOrder"
  ): TypedContractMethod<
    [
      order: OPLimitOrderStorage.CloseOrderStruct,
      signature: BytesLike,
      fillingHeld: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fillOpenOrder"
  ): TypedContractMethod<
    [
      order: OPLimitOrderStorage.OpenOrderStruct,
      signature: BytesLike,
      fillingDeposit: BigNumberish,
      dexData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getOrderId"
  ): TypedContractMethod<
    [order: OPLimitOrderStorage.OrderStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashCloseOrder"
  ): TypedContractMethod<
    [order: OPLimitOrderStorage.CloseOrderStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashOpenOrder"
  ): TypedContractMethod<
    [order: OPLimitOrderStorage.OpenOrderStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "remaining"
  ): TypedContractMethod<[_orderId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "remainingRaw"
  ): TypedContractMethod<[_orderId: BytesLike], [bigint], "view">;

  filters: {};
}
