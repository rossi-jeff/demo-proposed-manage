import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { FuelMyClubActivityType } from "./types";

export const getActivityId = (parent: FuelMyClubActivityType) => {
  return parent.activityId ?? null;
};
export const getCreatedAt = (parent: FuelMyClubActivityType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getExternalFmcOrganizationId = (
  parent: FuelMyClubActivityType
) => {
  return parent.externalFmcOrganizationId ?? null;
};
export const getUpdatedAt = (parent: FuelMyClubActivityType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const FuelMyClubActivity: Resolvers["FuelMyClubActivity"] = {
  activityId: getActivityId,
  externalFmcOrganizationId: getExternalFmcOrganizationId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    if (ref.activityId === null) return null;
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  FuelMyClubFundraisers: async (parent) => {
    return await db.client.fuelMyClubFundraiser.findMany({
      where: {
        fuelMyClubActivityId: parent.id,
      },
    });
  },
};
