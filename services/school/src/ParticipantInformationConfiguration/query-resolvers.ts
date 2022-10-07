import { db } from "../db";
import {
  QueryResolvers,
  QueryParticipantInformationConfigurationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getParticipantInformationConfigurations = async () => {
  return await db.client.participantInformationConfiguration.findMany();
};

export const participantInformationConfigurations: QueryResolvers["participantInformationConfigurations"] =
  async () => {
    return await getParticipantInformationConfigurations();
  };

export const getParticipantInformationConfiguration = async (
  args: QueryParticipantInformationConfigurationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.participantInformationConfiguration.findFirst({
    where: {
      id,
    },
  });
};

export const participantInformationConfiguration: QueryResolvers["participantInformationConfiguration"] =
  async (_, args: QueryParticipantInformationConfigurationArgs) => {
    return await getParticipantInformationConfiguration(args);
  };
