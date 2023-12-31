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
} from "../common";

export declare namespace EnderBondLiquidityDeposit {
  export type SignDataStruct = {
    user: AddressLike;
    key: string;
    signature: BytesLike;
  };

  export type SignDataStructOutput = [
    user: string,
    key: string,
    signature: string
  ] & { user: string; key: string; signature: string };
}

export interface EnderBondLiquidityDepositInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admin"
      | "approvalForBond"
      | "bondableTokens"
      | "bonds"
      | "deposit"
      | "depositEnable"
      | "depositedIntoBond"
      | "eip712Domain"
      | "enderBond"
      | "index"
      | "initialize"
      | "lido"
      | "minDepositAmount"
      | "owner"
      | "renounceOwnership"
      | "rewardShareIndex"
      | "rewardSharePerUserIndexStEth"
      | "setAddress"
      | "setBondableTokens"
      | "setDepositEnable"
      | "setMinDepAmount"
      | "setsigner"
      | "signer"
      | "stEth"
      | "totalRewardOfUser"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BondableTokensSet"
      | "Deposit"
      | "EIP712DomainChanged"
      | "Initialized"
      | "MinDepAmountSet"
      | "OwnershipTransferred"
      | "WhitelistChanged"
      | "depositEnableSet"
      | "newSigner"
      | "userInfo"
  ): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approvalForBond",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bondableTokens",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "bonds", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      EnderBondLiquidityDeposit.SignDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEnable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositedIntoBond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "enderBond", values?: undefined): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "lido", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minDepositAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardShareIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardSharePerUserIndexStEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBondableTokens",
    values: [AddressLike[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositEnable",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinDepAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setsigner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(functionFragment: "stEth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalRewardOfUser",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvalForBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bondableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bonds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositedIntoBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enderBond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lido", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minDepositAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardShareIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardSharePerUserIndexStEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBondableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinDepAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setsigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalRewardOfUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace BondableTokensSetEvent {
  export type InputTuple = [token: AddressLike, isEnabled: boolean];
  export type OutputTuple = [token: string, isEnabled: boolean];
  export interface OutputObject {
    token: string;
    isEnabled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    sender: AddressLike,
    index: BigNumberish,
    bondFees: BigNumberish,
    principal: BigNumberish,
    maturity: BigNumberish,
    token: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    index: bigint,
    bondFees: bigint,
    principal: bigint,
    maturity: bigint,
    token: string
  ];
  export interface OutputObject {
    sender: string;
    index: bigint;
    bondFees: bigint;
    principal: bigint;
    maturity: bigint;
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinDepAmountSetEvent {
  export type InputTuple = [newAmount: BigNumberish];
  export type OutputTuple = [newAmount: bigint];
  export interface OutputObject {
    newAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistChangedEvent {
  export type InputTuple = [whitelistingAddress: AddressLike, action: boolean];
  export type OutputTuple = [whitelistingAddress: string, action: boolean];
  export interface OutputObject {
    whitelistingAddress: string;
    action: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace depositEnableSetEvent {
  export type InputTuple = [depositEnable: boolean];
  export type OutputTuple = [depositEnable: boolean];
  export interface OutputObject {
    depositEnable: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace newSignerEvent {
  export type InputTuple = [_signer: AddressLike];
  export type OutputTuple = [_signer: string];
  export interface OutputObject {
    _signer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace userInfoEvent {
  export type InputTuple = [
    user: AddressLike,
    index: BigNumberish,
    principal: BigNumberish,
    totalAmount: BigNumberish,
    bondFees: BigNumberish,
    maturity: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    index: bigint,
    principal: bigint,
    totalAmount: bigint,
    bondFees: bigint,
    maturity: bigint
  ];
  export interface OutputObject {
    user: string;
    index: bigint;
    principal: bigint;
    totalAmount: bigint;
    bondFees: bigint;
    maturity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EnderBondLiquidityDeposit extends BaseContract {
  connect(runner?: ContractRunner | null): EnderBondLiquidityDeposit;
  waitForDeployment(): Promise<this>;

  interface: EnderBondLiquidityDepositInterface;

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

  admin: TypedContractMethod<[], [string], "view">;

  approvalForBond: TypedContractMethod<
    [_bond: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  bondableTokens: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  bonds: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint] & {
        user: string;
        principalAmount: bigint;
        totalAmount: bigint;
        bondFees: bigint;
        maturity: bigint;
      }
    ],
    "view"
  >;

  deposit: TypedContractMethod<
    [
      principal: BigNumberish,
      maturity: BigNumberish,
      bondFee: BigNumberish,
      token: AddressLike,
      userSign: EnderBondLiquidityDeposit.SignDataStruct
    ],
    [void],
    "payable"
  >;

  depositEnable: TypedContractMethod<[], [boolean], "view">;

  depositedIntoBond: TypedContractMethod<
    [_index: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        user: string;
        principal: bigint;
        bondFees: bigint;
        maturity: bigint;
      }
    ],
    "nonpayable"
  >;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  enderBond: TypedContractMethod<[], [string], "view">;

  index: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _stEth: AddressLike,
      _lido: AddressLike,
      _signer: AddressLike,
      _admin: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  lido: TypedContractMethod<[], [string], "view">;

  minDepositAmount: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardShareIndex: TypedContractMethod<[], [bigint], "view">;

  rewardSharePerUserIndexStEth: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  setAddress: TypedContractMethod<
    [_addr: AddressLike, _type: BigNumberish],
    [void],
    "nonpayable"
  >;

  setBondableTokens: TypedContractMethod<
    [tokens: AddressLike[], enabled: boolean],
    [void],
    "nonpayable"
  >;

  setDepositEnable: TypedContractMethod<
    [_depositEnable: boolean],
    [void],
    "nonpayable"
  >;

  setMinDepAmount: TypedContractMethod<
    [_amt: BigNumberish],
    [void],
    "nonpayable"
  >;

  setsigner: TypedContractMethod<[_signer: AddressLike], [void], "nonpayable">;

  stEth: TypedContractMethod<[], [string], "view">;

  totalRewardOfUser: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "approvalForBond"
  ): TypedContractMethod<
    [_bond: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bondableTokens"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "bonds"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint] & {
        user: string;
        principalAmount: bigint;
        totalAmount: bigint;
        bondFees: bigint;
        maturity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [
      principal: BigNumberish,
      maturity: BigNumberish,
      bondFee: BigNumberish,
      token: AddressLike,
      userSign: EnderBondLiquidityDeposit.SignDataStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositEnable"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "depositedIntoBond"
  ): TypedContractMethod<
    [_index: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        user: string;
        principal: bigint;
        bondFees: bigint;
        maturity: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "enderBond"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "index"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _stEth: AddressLike,
      _lido: AddressLike,
      _signer: AddressLike,
      _admin: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lido"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minDepositAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardShareIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardSharePerUserIndexStEth"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAddress"
  ): TypedContractMethod<
    [_addr: AddressLike, _type: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBondableTokens"
  ): TypedContractMethod<
    [tokens: AddressLike[], enabled: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDepositEnable"
  ): TypedContractMethod<[_depositEnable: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMinDepAmount"
  ): TypedContractMethod<[_amt: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setsigner"
  ): TypedContractMethod<[_signer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "signer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stEth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalRewardOfUser"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "BondableTokensSet"
  ): TypedContractEvent<
    BondableTokensSetEvent.InputTuple,
    BondableTokensSetEvent.OutputTuple,
    BondableTokensSetEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MinDepAmountSet"
  ): TypedContractEvent<
    MinDepAmountSetEvent.InputTuple,
    MinDepAmountSetEvent.OutputTuple,
    MinDepAmountSetEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistChanged"
  ): TypedContractEvent<
    WhitelistChangedEvent.InputTuple,
    WhitelistChangedEvent.OutputTuple,
    WhitelistChangedEvent.OutputObject
  >;
  getEvent(
    key: "depositEnableSet"
  ): TypedContractEvent<
    depositEnableSetEvent.InputTuple,
    depositEnableSetEvent.OutputTuple,
    depositEnableSetEvent.OutputObject
  >;
  getEvent(
    key: "newSigner"
  ): TypedContractEvent<
    newSignerEvent.InputTuple,
    newSignerEvent.OutputTuple,
    newSignerEvent.OutputObject
  >;
  getEvent(
    key: "userInfo"
  ): TypedContractEvent<
    userInfoEvent.InputTuple,
    userInfoEvent.OutputTuple,
    userInfoEvent.OutputObject
  >;

  filters: {
    "BondableTokensSet(address,bool)": TypedContractEvent<
      BondableTokensSetEvent.InputTuple,
      BondableTokensSetEvent.OutputTuple,
      BondableTokensSetEvent.OutputObject
    >;
    BondableTokensSet: TypedContractEvent<
      BondableTokensSetEvent.InputTuple,
      BondableTokensSetEvent.OutputTuple,
      BondableTokensSetEvent.OutputObject
    >;

    "Deposit(address,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "MinDepAmountSet(uint256)": TypedContractEvent<
      MinDepAmountSetEvent.InputTuple,
      MinDepAmountSetEvent.OutputTuple,
      MinDepAmountSetEvent.OutputObject
    >;
    MinDepAmountSet: TypedContractEvent<
      MinDepAmountSetEvent.InputTuple,
      MinDepAmountSetEvent.OutputTuple,
      MinDepAmountSetEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "WhitelistChanged(address,bool)": TypedContractEvent<
      WhitelistChangedEvent.InputTuple,
      WhitelistChangedEvent.OutputTuple,
      WhitelistChangedEvent.OutputObject
    >;
    WhitelistChanged: TypedContractEvent<
      WhitelistChangedEvent.InputTuple,
      WhitelistChangedEvent.OutputTuple,
      WhitelistChangedEvent.OutputObject
    >;

    "depositEnableSet(bool)": TypedContractEvent<
      depositEnableSetEvent.InputTuple,
      depositEnableSetEvent.OutputTuple,
      depositEnableSetEvent.OutputObject
    >;
    depositEnableSet: TypedContractEvent<
      depositEnableSetEvent.InputTuple,
      depositEnableSetEvent.OutputTuple,
      depositEnableSetEvent.OutputObject
    >;

    "newSigner(address)": TypedContractEvent<
      newSignerEvent.InputTuple,
      newSignerEvent.OutputTuple,
      newSignerEvent.OutputObject
    >;
    newSigner: TypedContractEvent<
      newSignerEvent.InputTuple,
      newSignerEvent.OutputTuple,
      newSignerEvent.OutputObject
    >;

    "userInfo(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      userInfoEvent.InputTuple,
      userInfoEvent.OutputTuple,
      userInfoEvent.OutputObject
    >;
    userInfo: TypedContractEvent<
      userInfoEvent.InputTuple,
      userInfoEvent.OutputTuple,
      userInfoEvent.OutputObject
    >;
  };
}
