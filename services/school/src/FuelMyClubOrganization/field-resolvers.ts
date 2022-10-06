import { Resolvers } from "../../generated/graphql";
import { FuelMyClubOrganizationType } from "./types";

export const getCreatedAt = (parent: FuelMyClubOrganizationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getData = (parent: FuelMyClubOrganizationType) => {
  return parent.data ?? null;
};
export const getFmcFundraiser = (parent: FuelMyClubOrganizationType) => {
  return parent.fmcFundraiser ?? null;
};
export const getFmcOrganization = (parent: FuelMyClubOrganizationType) => {
  return parent.fmcOrganization ?? null;
};
export const getFmcParticipant = (parent: FuelMyClubOrganizationType) => {
  return parent.fmcParticipant ?? null;
};
export const getSalesLink = (parent: FuelMyClubOrganizationType) => {
  return parent.salesLink ?? null;
};
export const getSchoolId = (parent: FuelMyClubOrganizationType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: FuelMyClubOrganizationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const FuelMyClubOrganization: Resolvers["FuelMyClubOrganization"] = {
  schoolId: getSchoolId,
  data: getData,
  fmcOrganization: getFmcOrganization,
  fmcFundraiser: getFmcFundraiser,
  fmcParticipant: getFmcParticipant,
  salesLink: getSalesLink,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
