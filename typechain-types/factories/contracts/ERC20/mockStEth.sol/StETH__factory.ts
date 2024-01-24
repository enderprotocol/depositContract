/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  StETH,
  StETHInterface,
} from "../../../../contracts/ERC20/mockStEth.sol/StETH";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preRebaseTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "postRebaseTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sharesAmount",
        type: "uint256",
      },
    ],
    name: "SharesBurnt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sharesValue",
        type: "uint256",
      },
    ],
    name: "TransferShares",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_SHARES_POSITION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TotalEthAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    name: "getPooledEthByShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ethAmount",
        type: "uint256",
      },
    ],
    name: "getSharesByPooledEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPooledEther",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "sharesOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "submit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    name: "transferShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    name: "transferSharesFrom",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526001600255600160035534801561001a57600080fd5b50610e2a8061002a6000396000f3fe60806040526004361061012e5760003560e01c80635bcb2fc6116100ab57806395d89b411161006f57806395d89b4114610315578063a457c2d714610343578063a9059cbb14610363578063d5002f2e14610383578063dd62ed3e14610398578063f5eb42dc146103de57600080fd5b80635bcb2fc61461028d5780636d7804591461029557806370a08231146102b55780637a28fb88146102d55780638fcb4e5b146102f557600080fd5b806330033d1e116100f257806330033d1e14610225578063313ce5671461023b57806337cfdaca146101c2578063395093511461025757806354712edf1461027757600080fd5b806306fdde031461013a578063095ea7b31461019257806318160ddd146101c257806319208451146101e557806323b872dd1461020557600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5060408051808201909152601781527f4c6971756964207374616b656420457468657220322e3000000000000000000060208201525b6040516101899190610be7565b60405180910390f35b34801561019e57600080fd5b506101b26101ad366004610c16565b6103fe565b6040519015158152602001610189565b3480156101ce57600080fd5b506101d7610415565b604051908152602001610189565b3480156101f157600080fd5b506101d7610200366004610c40565b610425565b34801561021157600080fd5b506101b2610220366004610c59565b610448565b34801561023157600080fd5b506101d760025481565b34801561024757600080fd5b5060405160128152602001610189565b34801561026357600080fd5b506101b2610272366004610c16565b61046a565b34801561028357600080fd5b506101d760035481565b6101d76104a6565b3480156102a157600080fd5b506101d76102b0366004610c59565b6104db565b3480156102c157600080fd5b506101d76102d0366004610c95565b610513565b3480156102e157600080fd5b506101d76102f0366004610c40565b610531565b34801561030157600080fd5b506101d7610310366004610c16565b610544565b34801561032157600080fd5b506040805180820190915260058152640e6e88aa8960db1b602082015261017c565b34801561034f57600080fd5b506101b261035e366004610c16565b610571565b34801561036f57600080fd5b506101b261037e366004610c16565b610614565b34801561038f57600080fd5b506101d7610621565b3480156103a457600080fd5b506101d76103b3366004610cb0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3480156103ea57600080fd5b506101d76103f9366004610c95565b61062c565b600061040b33848461064a565b5060015b92915050565b600061042060035490565b905090565b600061043060035490565b6002545b61043e9084610cf9565b61040f9190610d10565b6000610455843384610747565b6104608484846107d0565b5060019392505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161040b9185906104a1908690610d32565b61064a565b6000806104b234610425565b905034600360008282546104c69190610d32565b909155506104d6905033826107f4565b505090565b6000806104e783610531565b90506104f4853383610747565b6104ff8585856108a1565b61050b85858386610a88565b949350505050565b6001600160a01b03811660009081526020819052604081205461040f905b600061053c60025490565b600354610434565b60006105513384846108a1565b600061055c83610531565b905061056a33858386610a88565b9392505050565b3360009081526001602090815260408083206001600160a01b0386168452825280832054815160608101909252603580835290926105b99284928792610d8190830139610b28565b828110156106055760405162461bcd60e51b8152602060048201526014602482015273414c4c4f57414e43455f42454c4f575f5a45524f60601b60448201526064015b60405180910390fd5b61046033856104a18685610d45565b600061040b3384846107d0565b600061042060025490565b6001600160a01b03811660009081526020819052604081205461040f565b6001600160a01b0383166106995760405162461bcd60e51b815260206004820152601660248201527520a8282927ab22afa32927a6afad22a927afa0a2222960511b60448201526064016105fc565b6001600160a01b0382166106e65760405162461bcd60e51b815260206004820152601460248201527320a8282927ab22afaa27afad22a927afa0a2222960611b60448201526064016105fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0380841660009081526001602090815260408083209386168352929052205460001981146107ca57818110156107bb5760405162461bcd60e51b815260206004820152601260248201527110531313d5d05390d157d15610d15151115160721b60448201526064016105fc565b6107ca84846104a18585610d45565b50505050565b60006107db82610425565b90506107e88484836108a1565b6107ca84848484610a88565b60006001600160a01b0383166108405760405162461bcd60e51b815260206004820152601160248201527026a4a72a2faa27afad22a927afa0a2222960791b60448201526064016105fc565b8161084a60025490565b6108549190610d32565b60028190556001600160a01b038416600090815260208190526040902054909150610880908390610d32565b6001600160a01b039093166000908152602081905260409020929092555090565b6001600160a01b0383166108f75760405162461bcd60e51b815260206004820152601760248201527f5452414e534645525f46524f4d5f5a45524f5f4144445200000000000000000060448201526064016105fc565b6001600160a01b0382166109455760405162461bcd60e51b81526020600482015260156024820152742a2920a729a322a92faa27afad22a927afa0a2222960591b60448201526064016105fc565b306001600160a01b0383160361099d5760405162461bcd60e51b815260206004820152601a60248201527f5452414e534645525f544f5f53544554485f434f4e545241435400000000000060448201526064016105fc565b6000806000856001600160a01b03166001600160a01b031681526020019081526020016000205490506109e982826040518060600160405280603f8152602001610db6603f9139610b28565b80821115610a2c5760405162461bcd60e51b815260206004820152601060248201526f109053105390d157d15610d15151115160821b60448201526064016105fc565b610a368282610d45565b6001600160a01b038086166000908152602081905260408082209390935590851681522054610a66908390610d32565b6001600160a01b03909316600090815260208190526040902092909255505050565b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610acd91815260200190565b60405180910390a3826001600160a01b0316846001600160a01b03167f9d9c909296d9c674451c0c24f02cb64981eb3b727f99865939192f880a755dcb83604051610b1a91815260200190565b60405180910390a350505050565b610b6f838383604051602401610b4093929190610d58565b60408051601f198184030181529190526020810180516001600160e01b03166338e8257960e11b179052610b74565b505050565b610b7d81610b80565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6000815180845260005b81811015610bc757602081850181015186830182015201610bab565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061056a6020830184610ba1565b80356001600160a01b0381168114610c1157600080fd5b919050565b60008060408385031215610c2957600080fd5b610c3283610bfa565b946020939093013593505050565b600060208284031215610c5257600080fd5b5035919050565b600080600060608486031215610c6e57600080fd5b610c7784610bfa565b9250610c8560208501610bfa565b9150604084013590509250925092565b600060208284031215610ca757600080fd5b61056a82610bfa565b60008060408385031215610cc357600080fd5b610ccc83610bfa565b9150610cda60208401610bfa565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761040f5761040f610ce3565b600082610d2d57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561040f5761040f610ce3565b8181038181111561040f5761040f610ce3565b838152826020820152606060408201526000610d776060830184610ba1565b9594505050505056fe2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2da26469706673582212205eb0f275232130113f49e090a2d54ba49e650a6024601483a86a6c2b13c09b3864736f6c63430008120033";

type StETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StETH__factory extends ContractFactory {
  constructor(...args: StETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      StETH & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StETH__factory {
    return super.connect(runner) as StETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StETHInterface {
    return new Interface(_abi) as StETHInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): StETH {
    return new Contract(address, _abi, runner) as unknown as StETH;
  }
}