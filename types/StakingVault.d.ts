/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingVaultInterface extends ethers.utils.Interface {
  functions: {
    "MAXIMUM_LOCK_PERIOD()": FunctionFragment;
    "MINIMUM_LOCK_PERIOD()": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "compound(address,uint256)": FunctionFragment;
    "distributor()": FunctionFragment;
    "getClaimableRewards(address)": FunctionFragment;
    "increaseLock(uint256,uint256)": FunctionFragment;
    "lock(uint256,uint256)": FunctionFragment;
    "lockFor(address,uint256,uint256)": FunctionFragment;
    "lockInfoList(address)": FunctionFragment;
    "notifyRewardAmount(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPause(bool)": FunctionFragment;
    "setRewardDistributor(address)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "totalLockedAmount()": FunctionFragment;
    "totalRewards()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unLock(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAXIMUM_LOCK_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMUM_LOCK_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "compound",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockFor",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockInfoList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setRewardDistributor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalLockedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unLock",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAXIMUM_LOCK_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINIMUM_LOCK_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockInfoList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRewardDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalLockedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unLock", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class StakingVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingVaultInterface;

  functions: {
    MAXIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    MINIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compound(
      user: string,
      rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    getClaimableRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { reward: BigNumber }>;

    increaseLock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockFor(
      user: string,
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockInfoList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        amount: BigNumber;
        period: BigNumber;
        startTime: BigNumber;
        updateTime: BigNumber;
        sigmaX: BigNumber;
        reward: BigNumber;
        lockStatus: boolean;
      }
    >;

    notifyRewardAmount(
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPause(
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardDistributor(
      _distributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalLockedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unLock(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MAXIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  MINIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compound(
    user: string,
    rewards: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributor(overrides?: CallOverrides): Promise<string>;

  getClaimableRewards(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseLock(
    amount: BigNumberish,
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lock(
    amount: BigNumberish,
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockFor(
    user: string,
    amount: BigNumberish,
    period: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockInfoList(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      amount: BigNumber;
      period: BigNumber;
      startTime: BigNumber;
      updateTime: BigNumber;
      sigmaX: BigNumber;
      reward: BigNumber;
      lockStatus: boolean;
    }
  >;

  notifyRewardAmount(
    reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPause(
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardDistributor(
    _distributor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalLockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  totalRewards(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unLock(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAXIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(user: string, overrides?: CallOverrides): Promise<void>;

    compound(
      user: string,
      rewards: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    distributor(overrides?: CallOverrides): Promise<string>;

    getClaimableRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseLock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockFor(
      user: string,
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockInfoList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        amount: BigNumber;
        period: BigNumber;
        startTime: BigNumber;
        updateTime: BigNumber;
        sigmaX: BigNumber;
        reward: BigNumber;
        lockStatus: boolean;
      }
    >;

    notifyRewardAmount(
      reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPause(status: boolean, overrides?: CallOverrides): Promise<void>;

    setRewardDistributor(
      _distributor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalLockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalRewards(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unLock(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    MAXIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMUM_LOCK_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compound(
      user: string,
      rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimableRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseLock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockFor(
      user: string,
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockInfoList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    notifyRewardAmount(
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPause(
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardDistributor(
      _distributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalLockedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    totalRewards(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unLock(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAXIMUM_LOCK_PERIOD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINIMUM_LOCK_PERIOD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compound(
      user: string,
      rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClaimableRewards(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseLock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lock(
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockFor(
      user: string,
      amount: BigNumberish,
      period: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockInfoList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyRewardAmount(
      reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPause(
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardDistributor(
      _distributor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalLockedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unLock(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
