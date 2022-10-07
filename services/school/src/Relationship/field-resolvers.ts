import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RelationshipType } from "./types";

export const getCreatedAt = (parent: RelationshipType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getReceiverId = (parent: RelationshipType) => {
  return parent.receiverId ?? null;
};
export const getRelationshipType = (parent: RelationshipType) => {
  return parent.relationshipType ?? null;
};
export const getSubjectId = (parent: RelationshipType) => {
  return parent.subjectId ?? null;
};
export const getUpdatedAt = (parent: RelationshipType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Relationship: Resolvers["Relationship"] = {
  subjectId: getSubjectId,
  receiverId: getReceiverId,
  relationshipType: getRelationshipType,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Subject: async (parent) => {
    if (parent.subjectId === null) return null;
    return await db.client.person.findFirst({
      where: {
        id: parent.subjectId,
      },
    });
  },
  Receiver: async (parent) => {
    if (parent.receiverId === null) return null;
    return await db.client.person.findFirst({
      where: {
        id: parent.receiverId,
      },
    });
  },
};
