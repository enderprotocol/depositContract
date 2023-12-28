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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Lybra,
  LybraInterface,
} from "../../../../contracts/strategy/lybraFinance/Lybra";

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
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "depositAssetToMint",
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
  "0x6080604052610fa060025534801561001657600080fd5b506040516104e23803806104e28339810160408190526100359161005a565b600180546001600160a01b0319166001600160a01b039290921691909117905561008a565b60006020828403121561006c57600080fd5b81516001600160a01b038116811461008357600080fd5b9392505050565b610449806100996000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633bcfc4b81461005c5780633ccfd60b1461007857806399940ece14610082578063c55585af146100ad578063c8910913146100c0575b600080fd5b61006560025481565b6040519081526020015b60405180910390f35b6100806100fc565b005b600154610095906001600160a01b031681565b6040516001600160a01b03909116815260200161006f565b6100806100bb36600461033b565b610269565b6100e76100ce366004610367565b6000602081905290815260409020805460019091015482565b6040805192835260208301919091520161006f565b336000908152602081815260408083208151808301909252805482526001015491810182905291906502de4135300090610136904261039f565b835160025461014591906103b8565b61014f91906103b8565b61015991906103cf565b6040805180820182526000808252602080830182815233808452918390529184902092518355905160019283015590548551925163a9059cbb60e01b8152600481019290925260248201929092529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af11580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020091906103f1565b506001546040516340c10f1960e01b8152336004820152602481018390526001600160a01b03909116906340c10f1990604401600060405180830381600087803b15801561024d57600080fd5b505af1158015610261573d6000803e3d6000fd5b505050505050565b6001546040516323b872dd60e01b81526001600160a01b03838116600483015230602483015260448201859052909116906323b872dd906064016020604051808303816000875af11580156102c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e691906103f1565b506040805180820182529283524260208085019182526001600160a01b0390931660009081529283905291209151825551600190910155565b80356001600160a01b038116811461033657600080fd5b919050565b6000806040838503121561034e57600080fd5b8235915061035e6020840161031f565b90509250929050565b60006020828403121561037957600080fd5b6103828261031f565b9392505050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103b2576103b2610389565b92915050565b80820281158282048414176103b2576103b2610389565b6000826103ec57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561040357600080fd5b8151801515811461038257600080fdfea26469706673582212208b25de8cfc543f0e8f69cd325c4addb46207d005b627a627eaac94e723910f8a64736f6c63430008120033";

type LybraConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LybraConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lybra__factory extends ContractFactory {
  constructor(...args: LybraConstructorParams) {
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
      Lybra & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Lybra__factory {
    return super.connect(runner) as Lybra__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LybraInterface {
    return new Interface(_abi) as LybraInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Lybra {
    return new Contract(address, _abi, runner) as unknown as Lybra;
  }
}