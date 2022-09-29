import { Resolvers } from "../../generated/graphql";
import { AwardType } from "./types";

export const getActive = (parent: AwardType) => {
  return parent.active ?? null;
};
export const getCreatedAt = (parent: AwardType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getName = (parent: AwardType) => {
  return parent.name ?? null;
};
export const getPosition = (parent: AwardType) => {
  return parent.position ?? null;
};
export const getSchoolId = (parent: AwardType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: AwardType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Award: Resolvers["Award"] = {
  schoolId: getSchoolId,
  name: getName,
  position: getPosition,
  active: getActive,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: async (parent) => {
    if (parent.schoolId === null) return null;
    return {
      __typename: "School",
      id: parent.schoolId,
    };
  },
};
