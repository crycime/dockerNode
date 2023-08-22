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

export interface OpenLevStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activeTrades"
      | "addressConfig"
      | "calculateConfig"
      | "liquidationConfig"
      | "markets"
      | "marketsLiquidations"
      | "numPairs"
      | "opLimitOrder"
      | "router1inch"
      | "supportDexs"
      | "taxes"
      | "totalHelds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeAllowedDepositTokens"
      | "Liquidation"
      | "MarginTrade"
      | "NewAddressConfig"
      | "NewCalculateConfig"
      | "NewLiquidationConfig"
      | "NewMarketConfig"
      | "NewMarketLiquidationConfig"
      | "TradeClosed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activeTrades",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addressConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketsLiquidations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "numPairs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "opLimitOrder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "router1inch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportDexs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taxes",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalHelds",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeTrades",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketsLiquidations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "opLimitOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "router1inch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportDexs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taxes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalHelds", data: BytesLike): Result;
}

export namespace ChangeAllowedDepositTokensEvent {
  export type InputTuple = [token: AddressLike[], allowed: boolean];
  export type OutputTuple = [token: string[], allowed: boolean];
  export interface OutputObject {
    token: string[];
    allowed: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidationEvent {
  export type InputTuple = [
    owner: AddressLike,
    marketId: BigNumberish,
    longToken: boolean,
    depositToken: boolean,
    heldAmount: BigNumberish,
    repayAmount: BigNumberish,
    liquidator: AddressLike,
    returnAmount: BigNumberish,
    fees: BigNumberish,
    token0Price: BigNumberish,
    dex: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    heldAmount: bigint,
    repayAmount: bigint,
    liquidator: string,
    returnAmount: bigint,
    fees: bigint,
    token0Price: bigint,
    dex: bigint
  ];
  export interface OutputObject {
    owner: string;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    heldAmount: bigint;
    repayAmount: bigint;
    liquidator: string;
    returnAmount: bigint;
    fees: bigint;
    token0Price: bigint;
    dex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarginTradeEvent {
  export type InputTuple = [
    trader: AddressLike,
    marketId: BigNumberish,
    longToken: boolean,
    depositToken: boolean,
    deposited: BigNumberish,
    borrowed: BigNumberish,
    held: BigNumberish,
    fees: BigNumberish,
    token0Price: BigNumberish,
    dex: BigNumberish
  ];
  export type OutputTuple = [
    trader: string,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    deposited: bigint,
    borrowed: bigint,
    held: bigint,
    fees: bigint,
    token0Price: bigint,
    dex: bigint
  ];
  export interface OutputObject {
    trader: string;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    deposited: bigint;
    borrowed: bigint;
    held: bigint;
    fees: bigint;
    token0Price: bigint;
    dex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewAddressConfigEvent {
  export type InputTuple = [
    controller: AddressLike,
    dexAggregator: AddressLike
  ];
  export type OutputTuple = [controller: string, dexAggregator: string];
  export interface OutputObject {
    controller: string;
    dexAggregator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewCalculateConfigEvent {
  export type InputTuple = [
    defaultFeesRate: BigNumberish,
    insuranceRatio: BigNumberish,
    defaultMarginLimit: BigNumberish,
    priceDiffientRatio: BigNumberish,
    updatePriceDiscount: BigNumberish,
    feesDiscount: BigNumberish,
    feesDiscountThreshold: BigNumberish,
    penaltyRatio: BigNumberish,
    maxLiquidationPriceDiffientRatio: BigNumberish,
    twapDuration: BigNumberish
  ];
  export type OutputTuple = [
    defaultFeesRate: bigint,
    insuranceRatio: bigint,
    defaultMarginLimit: bigint,
    priceDiffientRatio: bigint,
    updatePriceDiscount: bigint,
    feesDiscount: bigint,
    feesDiscountThreshold: bigint,
    penaltyRatio: bigint,
    maxLiquidationPriceDiffientRatio: bigint,
    twapDuration: bigint
  ];
  export interface OutputObject {
    defaultFeesRate: bigint;
    insuranceRatio: bigint;
    defaultMarginLimit: bigint;
    priceDiffientRatio: bigint;
    updatePriceDiscount: bigint;
    feesDiscount: bigint;
    feesDiscountThreshold: bigint;
    penaltyRatio: bigint;
    maxLiquidationPriceDiffientRatio: bigint;
    twapDuration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewLiquidationConfigEvent {
  export type InputTuple = [
    defaultliquidationRate: BigNumberish,
    liquidaMaximumYield: BigNumberish,
    liquidaMinimumYield: BigNumberish
  ];
  export type OutputTuple = [
    defaultliquidationRate: bigint,
    liquidaMaximumYield: bigint,
    liquidaMinimumYield: bigint
  ];
  export interface OutputObject {
    defaultliquidationRate: bigint;
    liquidaMaximumYield: bigint;
    liquidaMinimumYield: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewMarketConfigEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    feesRate: BigNumberish,
    marginLimit: BigNumberish,
    priceDiffientRatio: BigNumberish,
    dexs: BigNumberish[]
  ];
  export type OutputTuple = [
    marketId: bigint,
    feesRate: bigint,
    marginLimit: bigint,
    priceDiffientRatio: bigint,
    dexs: bigint[]
  ];
  export interface OutputObject {
    marketId: bigint;
    feesRate: bigint;
    marginLimit: bigint;
    priceDiffientRatio: bigint;
    dexs: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewMarketLiquidationConfigEvent {
  export type InputTuple = [
    marketId: BigNumberish,
    liquidationRate: BigNumberish,
    liquidaMaximumYield: BigNumberish,
    liquidaMinimumYield: BigNumberish
  ];
  export type OutputTuple = [
    marketId: bigint,
    liquidationRate: bigint,
    liquidaMaximumYield: bigint,
    liquidaMinimumYield: bigint
  ];
  export interface OutputObject {
    marketId: bigint;
    liquidationRate: bigint;
    liquidaMaximumYield: bigint;
    liquidaMinimumYield: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TradeClosedEvent {
  export type InputTuple = [
    owner: AddressLike,
    marketId: BigNumberish,
    longToken: boolean,
    depositToken: boolean,
    closeAmount: BigNumberish,
    depositDecrease: BigNumberish,
    depositReturn: BigNumberish,
    fees: BigNumberish,
    token0Price: BigNumberish,
    dex: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    marketId: bigint,
    longToken: boolean,
    depositToken: boolean,
    closeAmount: bigint,
    depositDecrease: bigint,
    depositReturn: bigint,
    fees: bigint,
    token0Price: bigint,
    dex: bigint
  ];
  export interface OutputObject {
    owner: string;
    marketId: bigint;
    longToken: boolean;
    depositToken: boolean;
    closeAmount: bigint;
    depositDecrease: bigint;
    depositReturn: bigint;
    fees: bigint;
    token0Price: bigint;
    dex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OpenLevStorage extends BaseContract {
  connect(runner?: ContractRunner | null): OpenLevStorage;
  waitForDeployment(): Promise<this>;

  interface: OpenLevStorageInterface;

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

  activeTrades: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: boolean],
    [
      [bigint, bigint, boolean, bigint, bigint] & {
        deposited: bigint;
        held: bigint;
        depositToken: boolean;
        lastBlockNum: bigint;
        heldRelativeBorrowed: bigint;
      }
    ],
    "view"
  >;

  addressConfig: TypedContractMethod<
    [],
    [
      [string, string, string, string] & {
        dexAggregator: string;
        controller: string;
        wETH: string;
        xOLE: string;
      }
    ],
    "view"
  >;

  calculateConfig: TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        defaultFeesRate: bigint;
        insuranceRatio: bigint;
        defaultMarginLimit: bigint;
        priceDiffientRatio: bigint;
        updatePriceDiscount: bigint;
        feesDiscount: bigint;
        feesDiscountThreshold: bigint;
        penaltyRatio: bigint;
        maxLiquidationPriceDiffientRatio: bigint;
        twapDuration: bigint;
      }
    ],
    "view"
  >;

  liquidationConfig: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        defaultliquidationRate: bigint;
        liquidaMaximumYield: bigint;
        liquidaMinimumYield: bigint;
      }
    ],
    "view"
  >;

  markets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        string,
        string,
        string,
        string,
        bigint,
        bigint,
        bigint,
        string,
        bigint,
        bigint
      ] & {
        pool0: string;
        pool1: string;
        token0: string;
        token1: string;
        marginLimit: bigint;
        feesRate: bigint;
        priceDiffientRatio: bigint;
        priceUpdater: string;
        pool0Insurance: bigint;
        pool1Insurance: bigint;
      }
    ],
    "view"
  >;

  marketsLiquidations: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        liquidationRate: bigint;
        liquidaMaximumYield: bigint;
        liquidaMinimumYield: bigint;
      }
    ],
    "view"
  >;

  numPairs: TypedContractMethod<[], [bigint], "view">;

  opLimitOrder: TypedContractMethod<[], [string], "view">;

  router1inch: TypedContractMethod<[], [string], "view">;

  supportDexs: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  taxes: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;

  totalHelds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activeTrades"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: boolean],
    [
      [bigint, bigint, boolean, bigint, bigint] & {
        deposited: bigint;
        held: bigint;
        depositToken: boolean;
        lastBlockNum: bigint;
        heldRelativeBorrowed: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "addressConfig"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, string] & {
        dexAggregator: string;
        controller: string;
        wETH: string;
        xOLE: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateConfig"
  ): TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        defaultFeesRate: bigint;
        insuranceRatio: bigint;
        defaultMarginLimit: bigint;
        priceDiffientRatio: bigint;
        updatePriceDiscount: bigint;
        feesDiscount: bigint;
        feesDiscountThreshold: bigint;
        penaltyRatio: bigint;
        maxLiquidationPriceDiffientRatio: bigint;
        twapDuration: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidationConfig"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        defaultliquidationRate: bigint;
        liquidaMaximumYield: bigint;
        liquidaMinimumYield: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "markets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        string,
        string,
        string,
        string,
        bigint,
        bigint,
        bigint,
        string,
        bigint,
        bigint
      ] & {
        pool0: string;
        pool1: string;
        token0: string;
        token1: string;
        marginLimit: bigint;
        feesRate: bigint;
        priceDiffientRatio: bigint;
        priceUpdater: string;
        pool0Insurance: bigint;
        pool1Insurance: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketsLiquidations"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        liquidationRate: bigint;
        liquidaMaximumYield: bigint;
        liquidaMinimumYield: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "numPairs"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "opLimitOrder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "router1inch"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportDexs"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "taxes"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike, arg2: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "totalHelds"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "ChangeAllowedDepositTokens"
  ): TypedContractEvent<
    ChangeAllowedDepositTokensEvent.InputTuple,
    ChangeAllowedDepositTokensEvent.OutputTuple,
    ChangeAllowedDepositTokensEvent.OutputObject
  >;
  getEvent(
    key: "Liquidation"
  ): TypedContractEvent<
    LiquidationEvent.InputTuple,
    LiquidationEvent.OutputTuple,
    LiquidationEvent.OutputObject
  >;
  getEvent(
    key: "MarginTrade"
  ): TypedContractEvent<
    MarginTradeEvent.InputTuple,
    MarginTradeEvent.OutputTuple,
    MarginTradeEvent.OutputObject
  >;
  getEvent(
    key: "NewAddressConfig"
  ): TypedContractEvent<
    NewAddressConfigEvent.InputTuple,
    NewAddressConfigEvent.OutputTuple,
    NewAddressConfigEvent.OutputObject
  >;
  getEvent(
    key: "NewCalculateConfig"
  ): TypedContractEvent<
    NewCalculateConfigEvent.InputTuple,
    NewCalculateConfigEvent.OutputTuple,
    NewCalculateConfigEvent.OutputObject
  >;
  getEvent(
    key: "NewLiquidationConfig"
  ): TypedContractEvent<
    NewLiquidationConfigEvent.InputTuple,
    NewLiquidationConfigEvent.OutputTuple,
    NewLiquidationConfigEvent.OutputObject
  >;
  getEvent(
    key: "NewMarketConfig"
  ): TypedContractEvent<
    NewMarketConfigEvent.InputTuple,
    NewMarketConfigEvent.OutputTuple,
    NewMarketConfigEvent.OutputObject
  >;
  getEvent(
    key: "NewMarketLiquidationConfig"
  ): TypedContractEvent<
    NewMarketLiquidationConfigEvent.InputTuple,
    NewMarketLiquidationConfigEvent.OutputTuple,
    NewMarketLiquidationConfigEvent.OutputObject
  >;
  getEvent(
    key: "TradeClosed"
  ): TypedContractEvent<
    TradeClosedEvent.InputTuple,
    TradeClosedEvent.OutputTuple,
    TradeClosedEvent.OutputObject
  >;

  filters: {
    "ChangeAllowedDepositTokens(address[],bool)": TypedContractEvent<
      ChangeAllowedDepositTokensEvent.InputTuple,
      ChangeAllowedDepositTokensEvent.OutputTuple,
      ChangeAllowedDepositTokensEvent.OutputObject
    >;
    ChangeAllowedDepositTokens: TypedContractEvent<
      ChangeAllowedDepositTokensEvent.InputTuple,
      ChangeAllowedDepositTokensEvent.OutputTuple,
      ChangeAllowedDepositTokensEvent.OutputObject
    >;

    "Liquidation(address,uint16,bool,bool,uint256,uint256,address,uint256,uint256,uint256,uint32)": TypedContractEvent<
      LiquidationEvent.InputTuple,
      LiquidationEvent.OutputTuple,
      LiquidationEvent.OutputObject
    >;
    Liquidation: TypedContractEvent<
      LiquidationEvent.InputTuple,
      LiquidationEvent.OutputTuple,
      LiquidationEvent.OutputObject
    >;

    "MarginTrade(address,uint16,bool,bool,uint256,uint256,uint256,uint256,uint256,uint32)": TypedContractEvent<
      MarginTradeEvent.InputTuple,
      MarginTradeEvent.OutputTuple,
      MarginTradeEvent.OutputObject
    >;
    MarginTrade: TypedContractEvent<
      MarginTradeEvent.InputTuple,
      MarginTradeEvent.OutputTuple,
      MarginTradeEvent.OutputObject
    >;

    "NewAddressConfig(address,address)": TypedContractEvent<
      NewAddressConfigEvent.InputTuple,
      NewAddressConfigEvent.OutputTuple,
      NewAddressConfigEvent.OutputObject
    >;
    NewAddressConfig: TypedContractEvent<
      NewAddressConfigEvent.InputTuple,
      NewAddressConfigEvent.OutputTuple,
      NewAddressConfigEvent.OutputObject
    >;

    "NewCalculateConfig(uint16,uint8,uint16,uint16,uint16,uint16,uint128,uint16,uint8,uint16)": TypedContractEvent<
      NewCalculateConfigEvent.InputTuple,
      NewCalculateConfigEvent.OutputTuple,
      NewCalculateConfigEvent.OutputObject
    >;
    NewCalculateConfig: TypedContractEvent<
      NewCalculateConfigEvent.InputTuple,
      NewCalculateConfigEvent.OutputTuple,
      NewCalculateConfigEvent.OutputObject
    >;

    "NewLiquidationConfig(uint16,uint16,uint16)": TypedContractEvent<
      NewLiquidationConfigEvent.InputTuple,
      NewLiquidationConfigEvent.OutputTuple,
      NewLiquidationConfigEvent.OutputObject
    >;
    NewLiquidationConfig: TypedContractEvent<
      NewLiquidationConfigEvent.InputTuple,
      NewLiquidationConfigEvent.OutputTuple,
      NewLiquidationConfigEvent.OutputObject
    >;

    "NewMarketConfig(uint16,uint16,uint32,uint16,uint32[])": TypedContractEvent<
      NewMarketConfigEvent.InputTuple,
      NewMarketConfigEvent.OutputTuple,
      NewMarketConfigEvent.OutputObject
    >;
    NewMarketConfig: TypedContractEvent<
      NewMarketConfigEvent.InputTuple,
      NewMarketConfigEvent.OutputTuple,
      NewMarketConfigEvent.OutputObject
    >;

    "NewMarketLiquidationConfig(uint16,uint16,uint16,uint16)": TypedContractEvent<
      NewMarketLiquidationConfigEvent.InputTuple,
      NewMarketLiquidationConfigEvent.OutputTuple,
      NewMarketLiquidationConfigEvent.OutputObject
    >;
    NewMarketLiquidationConfig: TypedContractEvent<
      NewMarketLiquidationConfigEvent.InputTuple,
      NewMarketLiquidationConfigEvent.OutputTuple,
      NewMarketLiquidationConfigEvent.OutputObject
    >;

    "TradeClosed(address,uint16,bool,bool,uint256,uint256,uint256,uint256,uint256,uint32)": TypedContractEvent<
      TradeClosedEvent.InputTuple,
      TradeClosedEvent.OutputTuple,
      TradeClosedEvent.OutputObject
    >;
    TradeClosed: TypedContractEvent<
      TradeClosedEvent.InputTuple,
      TradeClosedEvent.OutputTuple,
      TradeClosedEvent.OutputObject
    >;
  };
}
