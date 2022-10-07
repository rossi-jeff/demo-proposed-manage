import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RecordAssignmentType } from "./types";

export const getBannerYear = (parent: RecordAssignmentType) => {
  return parent.bannerYear ?? null;
};
export const getCreatedAt = (parent: RecordAssignmentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getRecipientId = (parent: RecordAssignmentType) => {
  return parent.recipientId ?? null;
};
export const getRecordId = (parent: RecordAssignmentType) => {
  return parent.recordId ?? null;
};
export const getRecordSetDate = (parent: RecordAssignmentType) => {
  return parent.recordSetDate?.toString() ?? null;
};
export const getResult = (parent: RecordAssignmentType) => {
  return parent.result ?? null;
};
export const getRosterId = (parent: RecordAssignmentType) => {
  return parent.rosterId ?? null;
};
export const getState = (parent: RecordAssignmentType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: RecordAssignmentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const RecordAssignment: Resolvers["RecordAssignment"] = {
  recipientId: getRecipientId,
  rosterId: getRosterId,
  recordId: getRecordId,
  recordSetDate: getRecordSetDate,
  result: getResult,
  state: getState,
  bannerYear: getBannerYear,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  GroupRegistration: async (parent) => {
    if (parent.recipientId === null) return null;
    return await db.client.groupRegistration.findFirst({
      where: {
        id: parent.recipientId,
      },
    });
  },
  Record: async (parent) => {
    if (parent.recordId === null) return null;
    return await db.client.record.findFirst({
      where: {
        id: parent.recordId,
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
};
