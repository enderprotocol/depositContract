/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  EigenLayerStaking,
  EigenLayerStakingInterface,
} from "../../../../../contracts/strategy/eigenlayer/eigenLayer.sol/EigenLayerStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stEth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "apy",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stEth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userData",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052610fa060025534801561001657600080fd5b506040516104b73803806104b78339810160408190526100359161005a565b600180546001600160a01b0319166001600160a01b039290921691909117905561008a565b60006020828403121561006c57600080fd5b81516001600160a01b038116811461008357600080fd5b9392505050565b61041e806100996000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633bcfc4b81461005c5780633ccfd60b1461007857806399940ece14610082578063b6b55f25146100ad578063c8910913146100c0575b600080fd5b61006560025481565b6040519081526020015b60405180910390f35b6100806100fc565b005b600154610095906001600160a01b031681565b6040516001600160a01b03909116815260200161006f565b6100806100bb366004610315565b610269565b6100e76100ce36600461032e565b6000602081905290815260409020805460019091015482565b6040805192835260208301919091520161006f565b336000908152602081815260408083208151808301909252805482526001015491810182905291906502de41353000906101369042610374565b8351600254610145919061038d565b61014f919061038d565b61015991906103a4565b6040805180820182526000808252602080830182815233808452918390529184902092518355905160019283015590548551925163a9059cbb60e01b8152600481019290925260248201929092529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020091906103c6565b506001546040516340c10f1960e01b8152336004820152602481018390526001600160a01b03909116906340c10f1990604401600060405180830381600087803b15801561024d57600080fd5b505af1158015610261573d6000803e3d6000fd5b505050505050565b6001546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156102c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e491906103c6565b5060408051808201825291825242602080840191825233600090815290819052919091209151825551600190910155565b60006020828403121561032757600080fd5b5035919050565b60006020828403121561034057600080fd5b81356001600160a01b038116811461035757600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103875761038761035e565b92915050565b80820281158282048414176103875761038761035e565b6000826103c157634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156103d857600080fd5b8151801515811461035757600080fdfea264697066735822122069eec23b0b80b4c5de7a25e90c613025a52dfb0403791e6bfc70d63c30a415cd64736f6c63430008120033";

type EigenLayerStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EigenLayerStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EigenLayerStaking__factory extends ContractFactory {
  constructor(...args: EigenLayerStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _stEth: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_stEth, overrides || {});
  }
  override deploy(
    _stEth: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_stEth, overrides || {}) as Promise<
      EigenLayerStaking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EigenLayerStaking__factory {
    return super.connect(runner) as EigenLayerStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EigenLayerStakingInterface {
    return new Interface(_abi) as EigenLayerStakingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EigenLayerStaking {
    return new Contract(address, _abi, runner) as unknown as EigenLayerStaking;
  }
}