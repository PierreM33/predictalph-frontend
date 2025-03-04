/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as RoundChoiceContractJson } from "../choice/RoundChoice.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace RoundChoiceTypes {
  export type Fields = {
    prediction: HexString;
    epoch: bigint;
    feesBasisPts: bigint;
    bidEndTimestamp: bigint;
    operator: Address;
    rewardsComputed: boolean;
    totalAmountBoost: bigint;
    sideWon: boolean;
    totalAmount: bigint;
    amountTrue: bigint;
    amountFalse: bigint;
    treasuryAmount: bigint;
    rewardAmount: bigint;
    rewardBaseCalAmount: bigint;
    counterAttendees: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getEndRoundTime: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardBaseCalAmount: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRoundEpoch: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  RoundChoiceInstance,
  RoundChoiceTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as RoundChoiceTypes.Fields;
  }

  consts = {
    ErrorCodes: {
      InvalidCaller: BigInt(100),
      NotAllPlayerClaimed: BigInt(101),
      RewardsAlreadyComputed: BigInt(103),
      BidTimestampNotReached: BigInt(104),
      RewardsNotComputed: BigInt(105),
    },
  };

  at(address: string): RoundChoiceInstance {
    return new RoundChoiceInstance(address);
  }

  tests = {
    getEndRoundTime: async (
      params: Omit<
        TestContractParamsWithoutMaps<RoundChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getEndRoundTime", params);
    },
    getRewardAmount: async (
      params: Omit<
        TestContractParamsWithoutMaps<RoundChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getRewardAmount", params);
    },
    getRewardBaseCalAmount: async (
      params: Omit<
        TestContractParamsWithoutMaps<RoundChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getRewardBaseCalAmount", params);
    },
    getRoundEpoch: async (
      params: Omit<
        TestContractParamsWithoutMaps<RoundChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getRoundEpoch", params);
    },
    updateAmount: async (
      params: TestContractParamsWithoutMaps<
        RoundChoiceTypes.Fields,
        { from: Address; amount: bigint; side: boolean }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateAmount", params);
    },
    calculateRewards: async (
      params: TestContractParamsWithoutMaps<
        RoundChoiceTypes.Fields,
        { sideWinning: boolean }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "calculateRewards", params);
    },
    boost: async (
      params: TestContractParamsWithoutMaps<
        RoundChoiceTypes.Fields,
        { from: Address; amount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "boost", params);
    },
    destroy: async (
      params: Omit<
        TestContractParamsWithoutMaps<RoundChoiceTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params);
    },
    userClaimRewards: async (
      params: TestContractParamsWithoutMaps<
        RoundChoiceTypes.Fields,
        { addressPunter: Address; amountBid: bigint; sideBid: boolean }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "userClaimRewards", params);
    },
  };
}

// Use this object to test and deploy the contract
export const RoundChoice = new Factory(
  Contract.fromJson(
    RoundChoiceContractJson,
    "",
    "fbc167ffb4204a22ac97255649ed57cd8c570677499f03b56eaab76d327e4bf7"
  )
);

// Use this class to interact with the blockchain
export class RoundChoiceInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RoundChoiceTypes.State> {
    return fetchContractState(RoundChoice, this);
  }

  methods = {
    getEndRoundTime: async (
      params?: RoundChoiceTypes.CallMethodParams<"getEndRoundTime">
    ): Promise<RoundChoiceTypes.CallMethodResult<"getEndRoundTime">> => {
      return callMethod(
        RoundChoice,
        this,
        "getEndRoundTime",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardAmount: async (
      params?: RoundChoiceTypes.CallMethodParams<"getRewardAmount">
    ): Promise<RoundChoiceTypes.CallMethodResult<"getRewardAmount">> => {
      return callMethod(
        RoundChoice,
        this,
        "getRewardAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardBaseCalAmount: async (
      params?: RoundChoiceTypes.CallMethodParams<"getRewardBaseCalAmount">
    ): Promise<RoundChoiceTypes.CallMethodResult<"getRewardBaseCalAmount">> => {
      return callMethod(
        RoundChoice,
        this,
        "getRewardBaseCalAmount",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRoundEpoch: async (
      params?: RoundChoiceTypes.CallMethodParams<"getRoundEpoch">
    ): Promise<RoundChoiceTypes.CallMethodResult<"getRoundEpoch">> => {
      return callMethod(
        RoundChoice,
        this,
        "getRoundEpoch",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends RoundChoiceTypes.MultiCallParams>(
    calls: Calls
  ): Promise<RoundChoiceTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      RoundChoice,
      this,
      calls,
      getContractByCodeHash
    )) as RoundChoiceTypes.MultiCallResults<Calls>;
  }
}
