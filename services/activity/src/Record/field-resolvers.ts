import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RecordType } from "./types";

export const getCreatedAt = (parent: RecordType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getGroupId = (parent: RecordType) => {
  return parent.groupId ?? null;
};
export const getKind = (parent: RecordType) => {
  return parent.kind ?? null;
};
export const getRecordCode = (parent: RecordType) => {
  return parent.recordCode ?? null;
};
export const getSportCode = (parent: RecordType) => {
  return parent.sportCode ?? null;
};
export const getTitle = (parent: RecordType) => {
  return parent.title ?? null;
};
export const getUnit = (parent: RecordType) => {
  return parent.unit ?? null;
};
export const getUpdatedAt = (parent: RecordType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Record: Resolvers["Record"] = {
  groupId: getGroupId,
  sportCode: getSportCode,
  title: getTitle,
  recordCode: getRecordCode,
  unit: getUnit,
  kind: getKind,
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
  RecordAssignments: async (parent) => {
    return await db.client.recordAssignment.findMany({
      where: {
        recordId: parent.id,
      },
    });
  },
};
