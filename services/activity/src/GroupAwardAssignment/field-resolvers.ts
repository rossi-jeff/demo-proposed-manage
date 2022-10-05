import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { GroupAwardAssignmentType } from "./types";

export const getAwardId = (parent: GroupAwardAssignmentType) => {
  return parent.awardId ?? null;
};
export const getCreatedAt = (parent: GroupAwardAssignmentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getRecipientId = (parent: GroupAwardAssignmentType) => {
  return parent.recipientId ?? null;
};
export const getState = (parent: GroupAwardAssignmentType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: GroupAwardAssignmentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const GroupAwardAssignment: Resolvers["GroupAwardAssignment"] = {
  recipientId: getRecipientId,
  awardId: getAwardId,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  GroupAward: async (parent) => {
    if (parent.awardId === null) return null;
    return await db.client.groupAward.findFirst({
      where: {
        id: parent.awardId,
      },
    });
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
