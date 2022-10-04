import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { AwardAssignmentType } from "./types";

export const getAwardId = (parent: AwardAssignmentType) => {
  return parent.awardId ?? null;
};
export const getCreatedAt = (parent: AwardAssignmentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getRecipientId = (parent: AwardAssignmentType) => {
  return parent.recipientId ?? null;
};
export const getState = (parent: AwardAssignmentType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: AwardAssignmentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const AwardAssignment: Resolvers["AwardAssignment"] = {
  recipientId: getRecipientId,
  awardId: getAwardId,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Award: async (ref) => {
    if (ref.awardId === null) return null;
    return {
      __typename: "Award",
      id: ref.awardId,
    };
  },
  GroupRegistration: async (parent) => {
    if (parent.recipientId === null) return null;
    return await db.client.groupRegistration.findFirst({
      where: {
        id: parent.recipientId,
      },
    });
  },
};
