import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { FuelMyClubFundraiserType } from "./types";

export const getConfig = (parent: FuelMyClubFundraiserType) => {
  return parent.config ?? null;
};
export const getContactPersonId = (parent: FuelMyClubFundraiserType) => {
  return parent.contactPersonId ?? null;
};
export const getCreatedAt = (parent: FuelMyClubFundraiserType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getExternalFmcFundraiserId = (
  parent: FuelMyClubFundraiserType
) => {
  return parent.externalFmcFundraiserId ?? null;
};
export const getFuelMyClubActivityId = (parent: FuelMyClubFundraiserType) => {
  return parent.fuelMyClubActivityId ?? null;
};
export const getLeadInMessage = (parent: FuelMyClubFundraiserType) => {
  return parent.leadInMessage ?? null;
};
export const getSeason = (parent: FuelMyClubFundraiserType) => {
  return parent.season ?? null;
};
export const getUpdatedAt = (parent: FuelMyClubFundraiserType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const FuelMyClubFundraiser: Resolvers["FuelMyClubFundraiser"] = {
  fuelMyClubActivityId: getFuelMyClubActivityId,
  season: getSeason,
  externalFmcFundraiserId: getExternalFmcFundraiserId,
  contactPersonId: getContactPersonId,
  config: getConfig,
  leadInMessage: getLeadInMessage,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  ContactPerson: async (ref) => {
    if (ref.contactPersonId === null) return null;
    return {
      __typename: "Person",
      id: ref.contactPersonId,
    };
  },
  FuelMyClubActivity: async (parent) => {
    if (parent.fuelMyClubActivityId === null) return null;
    return await db.client.fuelMyClubActivity.findFirst({
      where: {
        id: parent.fuelMyClubActivityId,
      },
    });
  },
};
