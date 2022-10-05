import { db } from "../db";
import {
  QueryResolvers,
  QueryFeatureForSeasonArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getFeatureForSeasons = async () => {
  return await db.client.featureForSeason.findMany();
};

export const featureForSeasons: QueryResolvers["featureForSeasons"] =
  async () => {
    return await getFeatureForSeasons();
  };

export const getFeatureForSeason = async (args: QueryFeatureForSeasonArgs) => {
  const { id } = idArgs(args);
  return await db.client.featureForSeason.findFirst({
    where: {
      id,
    },
  });
};

export const featureForSeason: QueryResolvers["featureForSeason"] = async (
  _,
  args: QueryFeatureForSeasonArgs
) => {
  return await getFeatureForSeason(args);
};
