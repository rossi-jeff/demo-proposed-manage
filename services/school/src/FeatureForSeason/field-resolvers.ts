import { Resolvers } from "../../generated/graphql";
import { FeatureForSeasonType } from "./types";

export const getCreatedAt = (parent: FeatureForSeasonType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFeature = (parent: FeatureForSeasonType) => {
  return parent.feature ?? null;
};
export const getSchoolId = (parent: FeatureForSeasonType) => {
  return parent.schoolId ?? null;
};
export const getSeason = (parent: FeatureForSeasonType) => {
  return parent.season ?? null;
};
export const getUpdatedAt = (parent: FeatureForSeasonType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const FeatureForSeason: Resolvers["FeatureForSeason"] = {
  schoolId: getSchoolId,
  season: getSeason,
  feature: getFeature,
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
