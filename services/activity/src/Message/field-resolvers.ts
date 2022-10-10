import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { MessageType } from "./types";

export const getActivityId = (parent: MessageType) => {
  return parent.activityId ?? null;
};
export const getCreatedAt = (parent: MessageType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDocumentContentType = (parent: MessageType) => {
  return parent.documentContentType ?? null;
};
export const getDocumentFileName = (parent: MessageType) => {
  return parent.documentFileName ?? null;
};
export const getDocumentFileSize = (parent: MessageType) => {
  return parent.documentFileSize ?? null;
};
export const getEventId = (parent: MessageType) => {
  return parent.eventId ?? null;
};
export const getGroupId = (parent: MessageType) => {
  return parent.groupId ?? null;
};
export const getMessage = (parent: MessageType) => {
  return parent.message ?? null;
};
export const getMessageType = (parent: MessageType) => {
  return parent.messageType ?? null;
};
export const getSchoolId = (parent: MessageType) => {
  return parent.schoolId ?? null;
};
export const getSenderId = (parent: MessageType) => {
  return parent.senderId ?? null;
};
export const getStatus = (parent: MessageType) => {
  return parent.status ?? null;
};
export const getSuperadminMessage = (parent: MessageType) => {
  return parent.superadminMessage ?? null;
};
export const getUpdatedAt = (parent: MessageType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getVentureId = (parent: MessageType) => {
  return parent.ventureId ?? null;
};

export const Message: Resolvers["Message"] = {
  __resolveReference: async (ref) => {
    return await db.client.message.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  schoolId: getSchoolId,
  activityId: getActivityId,
  ventureId: getVentureId,
  status: getStatus,
  message: getMessage,
  groupId: getGroupId,
  senderId: getSenderId,
  eventId: getEventId,
  messageType: getMessageType,
  superadminMessage: getSuperadminMessage,
  documentFileName: getDocumentFileName,
  documentContentType: getDocumentContentType,
  documentFileSize: getDocumentFileSize,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    if (ref.activityId === null) return null;
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  Event: async (parent) => {
    if (parent.eventId === null) return null;
    return await db.client.event.findFirst({
      where: {
        id: parent.eventId,
      },
    });
  },
  Group: async (parent) => {
    if (parent.groupId === null) return null;
    return await db.client.group.findFirst({
      where: {
        id: parent.groupId,
      },
    });
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
  Sender: async (ref) => {
    if (ref.senderId === null) return null;
    return {
      __typename: "Person",
      id: ref.senderId,
    };
  },
  Venture: async (parent) => {
    if (parent.ventureId === null) return null;
    return await db.client.venture.findFirst({
      where: {
        id: parent.ventureId,
      },
    });
  },
};
