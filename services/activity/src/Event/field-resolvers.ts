import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { EventType } from "./types";

export const getActivityId = (parent: EventType) => {
  return parent.activityId ?? null;
};
export const getCancelled = (parent: EventType) => {
  return parent.cancelled ?? null;
};
export const getCreatedAt = (parent: EventType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDescription = (parent: EventType) => {
  return parent.description ?? null;
};
export const getDirector = (parent: EventType) => {
  return parent.director ?? null;
};
export const getEndTime = (parent: EventType) => {
  return parent.endTime?.toString() ?? null;
};
export const getEventDate = (parent: EventType) => {
  return parent.eventDate?.toString() ?? null;
};
export const getLocation = (parent: EventType) => {
  return parent.location ?? null;
};
export const getMaxTicketCapacity = (parent: EventType) => {
  return parent.maxTicketCapacity ?? null;
};
export const getName = (parent: EventType) => {
  return parent.name ?? null;
};
export const getRegisterable = (parent: EventType) => {
  return parent.registerable ?? null;
};
export const getRegistrationEnd = (parent: EventType) => {
  return parent.registrationEnd?.toString() ?? null;
};
export const getRegistrationStart = (parent: EventType) => {
  return parent.registrationStart?.toString() ?? null;
};
export const getStartTime = (parent: EventType) => {
  return parent.startTime?.toString() ?? null;
};
export const getState = (parent: EventType) => {
  return parent.state ?? null;
};
export const getStudentOnly = (parent: EventType) => {
  return parent.studentOnly ?? null;
};
export const getUpdatedAt = (parent: EventType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Event: Resolvers["Event"] = {
  __resolveReference: async (obj) => {
    return await db.client.event.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  activityId: getActivityId,
  name: getName,
  description: getDescription,
  registerable: getRegisterable,
  director: getDirector,
  startTime: getStartTime,
  endTime: getEndTime,
  studentOnly: getStudentOnly,
  location: getLocation,
  registrationStart: getRegistrationStart,
  registrationEnd: getRegistrationEnd,
  cancelled: getCancelled,
  state: getState,
  eventDate: getEventDate,
  maxTicketCapacity: getMaxTicketCapacity,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    if (ref.activityId === null) return null;
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  Messages: async (parent) => {
    return await db.client.message.findMany({
      where: {
        eventId: parent.id,
      },
    });
  },
  Tickets: async (parent) => {
    return await db.client.ticket.findMany({
      where: {
        eventId: parent.id,
      },
    });
  },
};
