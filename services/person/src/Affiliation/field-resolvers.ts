import { Resolvers } from "../../generated/graphql";
import { AffiliationType } from "./types";

export const getAffiliationType = (parent: AffiliationType) => {
  return parent.affiliationType ?? null;
};
export const getCreatedAt = (parent: AffiliationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getPersonId = (parent: AffiliationType) => {
  return parent.personId ?? null;
};
export const getSchoolId = (parent: AffiliationType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: AffiliationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Affiliation: Resolvers["Affiliation"] = {
  personId: getPersonId,
  schoolId: getSchoolId,
  affiliationType: getAffiliationType,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
