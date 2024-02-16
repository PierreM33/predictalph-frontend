/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { RunScriptResult, DeployContractExecutionResult } from "@alephium/cli";
import { NetworkId } from "@alephium/web3";
import {
  Punter,
  PunterInstance,
  Round,
  RoundInstance,
  RoundChoice,
  RoundChoiceInstance,
  PredictPrice,
  PredictPriceInstance,
  PredictChoice,
  PredictChoiceInstance,
} from ".";
import { default as testnetDeployments } from "../.deployments.testnet.json";
import { default as devnetDeployments } from "../.deployments.devnet.json";

export type Deployments = {
  deployerAddress: string;
  contracts: {
    Punter?: DeployContractExecutionResult<PunterInstance>;
    Round?: DeployContractExecutionResult<RoundInstance>;
    RoundChoice?: DeployContractExecutionResult<RoundChoiceInstance>;
    PredictPrice_PredictPriceALPH?: DeployContractExecutionResult<PredictPriceInstance>;
    PredictPrice_PredictPriceBTC?: DeployContractExecutionResult<PredictPriceInstance>;
    PredictChoice_PredictPriceBTC?: DeployContractExecutionResult<PredictChoiceInstance>;
    PredictChoice_PredictChoiceRhone?: DeployContractExecutionResult<PredictChoiceInstance>;
  };
};

function toDeployments(json: any): Deployments {
  const contracts = {
    Punter:
      json.contracts["Punter"] === undefined
        ? undefined
        : {
            ...json.contracts["Punter"],
            contractInstance: Punter.at(
              json.contracts["Punter"].contractInstance.address
            ),
          },
    Round:
      json.contracts["Round"] === undefined
        ? undefined
        : {
            ...json.contracts["Round"],
            contractInstance: Round.at(
              json.contracts["Round"].contractInstance.address
            ),
          },
    RoundChoice:
      json.contracts["RoundChoice"] === undefined
        ? undefined
        : {
            ...json.contracts["RoundChoice"],
            contractInstance: RoundChoice.at(
              json.contracts["RoundChoice"].contractInstance.address
            ),
          },
    PredictPrice_PredictPriceALPH:
      json.contracts["PredictPrice:PredictPriceALPH"] === undefined
        ? undefined
        : {
            ...json.contracts["PredictPrice:PredictPriceALPH"],
            contractInstance: PredictPrice.at(
              json.contracts["PredictPrice:PredictPriceALPH"].contractInstance
                .address
            ),
          },
    PredictPrice_PredictPriceBTC:
      json.contracts["PredictPrice:PredictPriceBTC"] === undefined
        ? undefined
        : {
            ...json.contracts["PredictPrice:PredictPriceBTC"],
            contractInstance: PredictPrice.at(
              json.contracts["PredictPrice:PredictPriceBTC"].contractInstance
                .address
            ),
          },
    PredictChoice_PredictPriceBTC:
      json.contracts["PredictChoice:PredictPriceBTC"] === undefined
        ? undefined
        : {
            ...json.contracts["PredictChoice:PredictPriceBTC"],
            contractInstance: PredictChoice.at(
              json.contracts["PredictChoice:PredictPriceBTC"].contractInstance
                .address
            ),
          },
    PredictChoice_PredictChoiceRhone:
      json.contracts["PredictChoice:PredictChoiceRhone"] === undefined
        ? undefined
        : {
            ...json.contracts["PredictChoice:PredictChoiceRhone"],
            contractInstance: PredictChoice.at(
              json.contracts["PredictChoice:PredictChoiceRhone"]
                .contractInstance.address
            ),
          },
  };
  return {
    ...json,
    contracts: contracts as Deployments["contracts"],
  };
}

export function loadDeployments(
  networkId: NetworkId,
  deployerAddress?: string
): Deployments {
  const deployments =
    networkId === "testnet"
      ? testnetDeployments
      : networkId === "devnet"
      ? devnetDeployments
      : undefined;
  if (deployments === undefined) {
    throw Error("The contract has not been deployed to the " + networkId);
  }
  const allDeployments = Array.isArray(deployments)
    ? deployments
    : [deployments];
  if (deployerAddress === undefined) {
    if (allDeployments.length > 1) {
      throw Error(
        "The contract has been deployed multiple times on " +
          networkId +
          ", please specify the deployer address"
      );
    } else {
      return toDeployments(allDeployments[0]);
    }
  }
  const result = allDeployments.find(
    (d) => d.deployerAddress === deployerAddress
  );
  if (result === undefined) {
    throw Error("The contract deployment result does not exist");
  }
  return toDeployments(result);
}
