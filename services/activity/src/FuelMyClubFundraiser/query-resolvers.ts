import { db } from "../db";
import {
  QueryResolvers,
  QueryFuelMyClubFundraiserArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getFuelMyClubFundraisers = async () => {
  return await db.client.fuelMyClubFundraiser.findMany();
};

export const fuelMyClubFundraisers: QueryResolvers["fuelMyClubFundraisers"] =
  async () => {
    return await getFuelMyClubFundraisers();
  };

export const getFuelMyClubFundraiser = async (
  args: QueryFuelMyClubFundraiserArgs
) => {
  const { id } = idArgs(args);
  return await db.client.fuelMyClubFundraiser.findFirst({
    where: {
      id,
    },
  });
};

export const fuelMyClubFundraiser: QueryResolvers["fuelMyClubFundraiser"] =
  async (_, args: QueryFuelMyClubFundraiserArgs) => {
    return await getFuelMyClubFundraiser(args);
  };
