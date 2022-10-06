import { db } from "../db";
import {
  QueryResolvers,
  QueryFuelMyClubOrganizationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getFuelMyClubOrganizations = async () => {
  return await db.client.fuelMyClubOrganization.findMany();
};

export const fuelMyClubOrganizations: QueryResolvers["fuelMyClubOrganizations"] =
  async () => {
    return await getFuelMyClubOrganizations();
  };

export const getFuelMyClubOrganization = async (
  args: QueryFuelMyClubOrganizationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.fuelMyClubOrganization.findFirst({
    where: {
      id,
    },
  });
};

export const fuelMyClubOrganization: QueryResolvers["fuelMyClubOrganization"] =
  async (_, args: QueryFuelMyClubOrganizationArgs) => {
    return await getFuelMyClubOrganization(args);
  };
