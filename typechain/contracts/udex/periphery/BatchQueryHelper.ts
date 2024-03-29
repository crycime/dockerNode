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

export declare namespace BatchQueryHelper {
  export type PriceVarsStruct = { price: BigNumberish; decimal: BigNumberish };

  export type PriceVarsStructOutput = [price: bigint, decimal: bigint] & {
    price: bigint;
    decimal: bigint;
  };
}

export interface BatchQueryHelperInterface extends Interface {
  getFunction(nameOrSignature: "getPrices"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getPrices",
    values: [AddressLike, AddressLike[], AddressLike[], BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
}

export interface BatchQueryHelper extends BaseContract {
  connect(runner?: ContractRunner | null): BatchQueryHelper;
  waitForDeployment(): Promise<this>;

  interface: BatchQueryHelperInterface;

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

  getPrices: TypedContractMethod<
    [
      dexAgg: AddressLike,
      token0s: AddressLike[],
      token1s: AddressLike[],
      dexDatas: BytesLike[]
    ],
    [BatchQueryHelper.PriceVarsStructOutput[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getPrices"
  ): TypedContractMethod<
    [
      dexAgg: AddressLike,
      token0s: AddressLike[],
      token1s: AddressLike[],
      dexDatas: BytesLike[]
    ],
    [BatchQueryHelper.PriceVarsStructOutput[]],
    "view"
  >;

  filters: {};
}
