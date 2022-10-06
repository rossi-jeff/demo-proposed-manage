import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { GroupAwardType } from "./types";

export const getCreatedAt = (parent: GroupAwardType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getGroupId = (parent: GroupAwardType) => {
  return parent.groupId ?? null;
};
export const getName = (parent: GroupAwardType) => {
  return parent.name ?? null;
};
export const getState = (parent: GroupAwardType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: GroupAwardType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const GroupAward: Resolvers["GroupAward"] = {
  groupId: getGroupId,
  name: getName,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Group: async (parent) => {
    if (parent.groupId === null) return null;
    return await db.client.group.findFirst({
      where: {
        id: parent.groupId,
      },
    });
  },
  GroupAwardAssignments: async (parent) => {
    return await db.client.groupAwardAssignment.findMany({
      where: {
        awardId: parent.id,
      },
    });
  },
};
