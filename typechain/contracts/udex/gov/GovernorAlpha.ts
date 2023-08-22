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

export declare namespace GovernorAlpha {
  export type ReceiptStruct = {
    hasVoted: boolean;
    support: boolean;
    votes: BigNumberish;
  };

  export type ReceiptStructOutput = [
    hasVoted: boolean,
    support: boolean,
    votes: bigint
  ] & { hasVoted: boolean; support: boolean; votes: bigint };
}

export interface GovernorAlphaInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BALLOT_TYPEHASH"
      | "DOMAIN_TYPEHASH"
      | "__abdicate"
      | "__acceptAdmin"
      | "cancel"
      | "castVote"
      | "castVoteBySig"
      | "castVoteBySigs"
      | "execute"
      | "getActions"
      | "getReceipt"
      | "guardian"
      | "latestProposalIds"
      | "name"
      | "proposalCount"
      | "proposalMaxOperations"
      | "proposalThreshold"
      | "proposals"
      | "propose"
      | "queue"
      | "quorumVotes"
      | "receipts"
      | "state"
      | "timelock"
      | "votingDelay"
      | "votingPeriod"
      | "xole"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ProposalCanceled"
      | "ProposalCreated"
      | "ProposalExecuted"
      | "ProposalQueued"
      | "VoteCast"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__abdicate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [BigNumberish, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySigs",
    values: [BigNumberish, boolean[], BigNumberish[], BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceipt",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestProposalIds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalMaxOperations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [AddressLike[], BigNumberish[], string[], BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "quorumVotes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receipts",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "xole", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "__abdicate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "__acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySigs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestProposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalMaxOperations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receipts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "xole", data: BytesLike): Result;
}

export namespace ProposalCanceledEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    proposer: AddressLike,
    targets: AddressLike[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    startBlock: BigNumberish,
    endBlock: BigNumberish,
    description: string
  ];
  export type OutputTuple = [
    id: bigint,
    proposer: string,
    targets: string[],
    values: bigint[],
    signatures: string[],
    calldatas: string[],
    startBlock: bigint,
    endBlock: bigint,
    description: string
  ];
  export interface OutputObject {
    id: bigint;
    proposer: string;
    targets: string[];
    values: bigint[];
    signatures: string[];
    calldatas: string[];
    startBlock: bigint;
    endBlock: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalQueuedEvent {
  export type InputTuple = [id: BigNumberish, eta: BigNumberish];
  export type OutputTuple = [id: bigint, eta: bigint];
  export interface OutputObject {
    id: bigint;
    eta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastEvent {
  export type InputTuple = [
    voter: AddressLike,
    proposalId: BigNumberish,
    support: boolean,
    votes: BigNumberish
  ];
  export type OutputTuple = [
    voter: string,
    proposalId: bigint,
    support: boolean,
    votes: bigint
  ];
  export interface OutputObject {
    voter: string;
    proposalId: bigint;
    support: boolean;
    votes: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GovernorAlpha extends BaseContract {
  connect(runner?: ContractRunner | null): GovernorAlpha;
  waitForDeployment(): Promise<this>;

  interface: GovernorAlphaInterface;

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

  BALLOT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  DOMAIN_TYPEHASH: TypedContractMethod<[], [string], "view">;

  __abdicate: TypedContractMethod<[], [void], "nonpayable">;

  __acceptAdmin: TypedContractMethod<[], [void], "nonpayable">;

  cancel: TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;

  castVote: TypedContractMethod<
    [proposalId: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;

  castVoteBySig: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  castVoteBySigs: TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: boolean[],
      v: BigNumberish[],
      r: BytesLike[],
      s: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  execute: TypedContractMethod<
    [proposalId: BigNumberish],
    [boolean],
    "payable"
  >;

  getActions: TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [string[], bigint[], string[], string[]] & {
        targets: string[];
        values: bigint[];
        signatures: string[];
        calldatas: string[];
      }
    ],
    "view"
  >;

  getReceipt: TypedContractMethod<
    [proposalId: BigNumberish, voter: AddressLike],
    [GovernorAlpha.ReceiptStructOutput],
    "view"
  >;

  guardian: TypedContractMethod<[], [string], "view">;

  latestProposalIds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  proposalCount: TypedContractMethod<[], [bigint], "view">;

  proposalMaxOperations: TypedContractMethod<[], [bigint], "view">;

  proposalThreshold: TypedContractMethod<[], [bigint], "view">;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        boolean
      ] & {
        id: bigint;
        proposer: string;
        eta: bigint;
        startBlock: bigint;
        endBlock: bigint;
        forVotes: bigint;
        againstVotes: bigint;
        canceled: boolean;
        executed: boolean;
      }
    ],
    "view"
  >;

  propose: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;

  queue: TypedContractMethod<
    [proposalId: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  quorumVotes: TypedContractMethod<
    [blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  receipts: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [boolean, boolean, bigint] & {
        hasVoted: boolean;
        support: boolean;
        votes: bigint;
      }
    ],
    "view"
  >;

  state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;

  timelock: TypedContractMethod<[], [string], "view">;

  votingDelay: TypedContractMethod<[], [bigint], "view">;

  votingPeriod: TypedContractMethod<[], [bigint], "view">;

  xole: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BALLOT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DOMAIN_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "__abdicate"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "__acceptAdmin"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancel"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "castVote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteBySig"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "castVoteBySigs"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      support: boolean[],
      v: BigNumberish[],
      r: BytesLike[],
      s: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<[proposalId: BigNumberish], [boolean], "payable">;
  getFunction(
    nameOrSignature: "getActions"
  ): TypedContractMethod<
    [proposalId: BigNumberish],
    [
      [string[], bigint[], string[], string[]] & {
        targets: string[];
        values: bigint[];
        signatures: string[];
        calldatas: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceipt"
  ): TypedContractMethod<
    [proposalId: BigNumberish, voter: AddressLike],
    [GovernorAlpha.ReceiptStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "guardian"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "latestProposalIds"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proposalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalMaxOperations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalThreshold"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [
        bigint,
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        boolean
      ] & {
        id: bigint;
        proposer: string;
        eta: bigint;
        startBlock: bigint;
        endBlock: bigint;
        forVotes: bigint;
        againstVotes: bigint;
        canceled: boolean;
        executed: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "propose"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "queue"
  ): TypedContractMethod<[proposalId: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "quorumVotes"
  ): TypedContractMethod<[blockNumber: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "receipts"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [
      [boolean, boolean, bigint] & {
        hasVoted: boolean;
        support: boolean;
        votes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "timelock"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "votingDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votingPeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "xole"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ProposalCanceled"
  ): TypedContractEvent<
    ProposalCanceledEvent.InputTuple,
    ProposalCanceledEvent.OutputTuple,
    ProposalCanceledEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalExecuted"
  ): TypedContractEvent<
    ProposalExecutedEvent.InputTuple,
    ProposalExecutedEvent.OutputTuple,
    ProposalExecutedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalQueued"
  ): TypedContractEvent<
    ProposalQueuedEvent.InputTuple,
    ProposalQueuedEvent.OutputTuple,
    ProposalQueuedEvent.OutputObject
  >;
  getEvent(
    key: "VoteCast"
  ): TypedContractEvent<
    VoteCastEvent.InputTuple,
    VoteCastEvent.OutputTuple,
    VoteCastEvent.OutputObject
  >;

  filters: {
    "ProposalCanceled(uint256)": TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;
    ProposalCanceled: TypedContractEvent<
      ProposalCanceledEvent.InputTuple,
      ProposalCanceledEvent.OutputTuple,
      ProposalCanceledEvent.OutputObject
    >;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256)": TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;
    ProposalExecuted: TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;

    "ProposalQueued(uint256,uint256)": TypedContractEvent<
      ProposalQueuedEvent.InputTuple,
      ProposalQueuedEvent.OutputTuple,
      ProposalQueuedEvent.OutputObject
    >;
    ProposalQueued: TypedContractEvent<
      ProposalQueuedEvent.InputTuple,
      ProposalQueuedEvent.OutputTuple,
      ProposalQueuedEvent.OutputObject
    >;

    "VoteCast(address,uint256,bool,uint256)": TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
    VoteCast: TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
  };
}