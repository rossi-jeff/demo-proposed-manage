import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RosterType } from "./types";

export const getCreatedAt = (parent: RosterType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFinal = (parent: RosterType) => {
  return parent.final ?? null;
};
export const getGroupId = (parent: RosterType) => {
  return parent.groupId ?? null;
};
export const getSeason = (parent: RosterType) => {
  return parent.season ?? null;
};
export const getUpdatedAt = (parent: RosterType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Roster: Resolvers["Roster"] = {
  __resolveReference: async (ref) => {
    return await db.client.roster.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  groupId: getGroupId,
  season: getSeason,
  final: getFinal,
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
};
