import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { GroupType } from "./types";

export const getA2kSiteschoolsportId = (parent: GroupType) => {
  return parent.a2kSiteschoolsportId ?? null;
};
export const getActivityId = (parent: GroupType) => {
  return parent.activityId ?? null;
};
export const getCreatedAt = (parent: GroupType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getGender = (parent: GroupType) => {
  return parent.gender ?? null;
};
export const getLevel = (parent: GroupType) => {
  return parent.level ?? null;
};
export const getName = (parent: GroupType) => {
  return parent.name ?? null;
};
export const getRosterwebserviceAccess = (parent: GroupType) => {
  return parent.rosterwebserviceAccess ?? null;
};
export const getSportName = (parent: GroupType) => {
  return parent.sportName ?? null;
};
export const getState = (parent: GroupType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: GroupType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Group: Resolvers["Group"] = {
  __resolveReference: async (obj) => {
    return await db.client.group.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  activityId: getActivityId,
  name: getName,
  level: getLevel,
  gender: getGender,
  a2kSiteschoolsportId: getA2kSiteschoolsportId,
  sportName: getSportName,
  rosterwebserviceAccess: getRosterwebserviceAccess,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  Messages: async (parent) => {
    return await db.client.message.findMany({
      where: {
        groupId: parent.id,
      },
    });
  },
  Registrations: async (parent) => {
    return await db.client.registration.findMany({
      where: {
        groupId: parent.id,
      },
    });
  },
  Rosters: async (parent) => {
    return await db.client.roster.findMany({
      where: {
        groupId: parent.id,
      },
    });
  },
  GroupAwards: async (parent) => {
    return await db.client.groupAward.findMany({
      where: {
        groupId: parent.id,
      },
    });
  },
  GroupRegistrations: async (parent) => {
    return await db.client.groupRegistration.findMany({
      where: {
        groupId: parent.id,
      },
    });
  },
};
