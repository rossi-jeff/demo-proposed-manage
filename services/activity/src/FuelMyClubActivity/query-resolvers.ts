import { db } from "../db";
import {
  QueryResolvers,
  QueryFuelMyClubActivityArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getFuelMyClubActivities = async () => {
  return await db.client.fuelMyClubActivity.findMany();
};

export const fuelMyClubActivities: QueryResolvers["fuelMyClubActivities"] =
  async () => {
    return await getFuelMyClubActivities();
  };

export const getFuelMyClubActivity = async (
  args: QueryFuelMyClubActivityArgs
) => {
  const { id } = idArgs(args);
  return await db.client.fuelMyClubActivity.findFirst({
    where: {
      id,
    },
  });
};

export const fuelMyClubActivity: QueryResolvers["fuelMyClubActivity"] = async (
  _,
  args: QueryFuelMyClubActivityArgs
) => {
  return await getFuelMyClubActivity(args);
};
