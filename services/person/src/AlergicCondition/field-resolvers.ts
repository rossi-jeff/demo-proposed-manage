import { Resolvers } from "../../generated/graphql";
import { AlergicConditionType } from "./types";

export const getAllergyCondition = (parent: AlergicConditionType) => {
  return parent.allergyCondition ?? null;
};
export const getCreatedAt = (parent: AlergicConditionType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getPersonId = (parent: AlergicConditionType) => {
  return parent.personId ?? null;
};
export const getReaction = (parent: AlergicConditionType) => {
  return parent.reaction ?? null;
};
export const getSeverity = (parent: AlergicConditionType) => {
  return parent.severity ?? null;
};
export const getUpdatedAt = (parent: AlergicConditionType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const AlergicCondition: Resolvers["AlergicCondition"] = {
  personId: getPersonId,
  allergyCondition: getAllergyCondition,
  severity: getSeverity,
  reaction: getReaction,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
};
