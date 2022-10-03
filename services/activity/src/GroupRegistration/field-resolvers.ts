import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { GroupRegistrationType } from "./types";

export const getCreatedAt = (parent: GroupRegistrationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFinalizeDate = (parent: GroupRegistrationType) => {
  return parent.finalizeDate?.toString() ?? null;
};
export const getGroupId = (parent: GroupRegistrationType) => {
  return parent.groupId ?? null;
};
export const getJerseyNumber = (parent: GroupRegistrationType) => {
  return parent.jerseyNumber ?? null;
};
export const getPosition = (parent: GroupRegistrationType) => {
  return parent.position ?? null;
};
export const getRegistrationId = (parent: GroupRegistrationType) => {
  return parent.registrationId ?? null;
};
export const getRosterId = (parent: GroupRegistrationType) => {
  return parent.rosterId ?? null;
};
export const getState = (parent: GroupRegistrationType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: GroupRegistrationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const GroupRegistration: Resolvers["GroupRegistration"] = {
  registrationId: getRegistrationId,
  groupId: getGroupId,
  rosterId: getRosterId,
  finalizeDate: getFinalizeDate,
  jerseyNumber: getJerseyNumber,
  position: getPosition,
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
  Registration: async (parent) => {
    if (parent.registrationId === null) return null;
    return await db.client.registration.findFirst({
      where: {
        id: parent.registrationId,
      },
    });
  },
  Roster: async (parent) => {
    if (parent.rosterId === null) return null;
    return await db.client.roster.findFirst({
      where: {
        id: parent.rosterId,
      },
    });
  },
  AwardAssignments: async (parent) => {
    return await db.client.awardAssignment.findMany({
      where: {
        recipientId: parent.id,
      },
    });
  },
};
