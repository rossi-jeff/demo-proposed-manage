import { db } from "../db";
import {
  QueryResolvers,
  QueryFuelMyClubRegistrationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getFuelMyClubRegistrations = async () => {
  return await db.client.fuelMyClubRegistration.findMany();
};

export const fuelMyClubRegistrations: QueryResolvers["fuelMyClubRegistrations"] =
  async () => {
    return await getFuelMyClubRegistrations();
  };

export const getFuelMyClubRegistration = async (
  args: QueryFuelMyClubRegistrationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.fuelMyClubRegistration.findFirst({
    where: {
      id,
    },
  });
};

export const fuelMyClubRegistration: QueryResolvers["fuelMyClubRegistration"] =
  async (_, args: QueryFuelMyClubRegistrationArgs) => {
    return await getFuelMyClubRegistration(args);
  };
