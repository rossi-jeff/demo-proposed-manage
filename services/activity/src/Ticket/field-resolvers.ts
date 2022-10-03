import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { TicketType } from "./types";

export const getBasePrice = (parent: TicketType) => {
  return parent.basePrice ?? null;
};
export const getCommentsEnabled = (parent: TicketType) => {
  return parent.commentsEnabled ?? null;
};
export const getCreatedAt = (parent: TicketType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEventId = (parent: TicketType) => {
  return parent.eventId ?? null;
};
export const getGroupSize = (parent: TicketType) => {
  return parent.groupSize ?? null;
};
export const getKind = (parent: TicketType) => {
  return parent.kind ?? null;
};
export const getMaxNumberOfTickets = (parent: TicketType) => {
  return parent.maxNumberOfTickets ?? null;
};
export const getState = (parent: TicketType) => {
  return parent.state ?? null;
};
export const getTitle = (parent: TicketType) => {
  return parent.title ?? null;
};
export const getUpdatedAt = (parent: TicketType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Ticket: Resolvers["Ticket"] = {
  __resolveReference: async (ref) => {
    return await db.client.ticket.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  eventId: getEventId,
  kind: getKind,
  basePrice: getBasePrice,
  maxNumberOfTickets: getMaxNumberOfTickets,
  state: getState,
  title: getTitle,
  groupSize: getGroupSize,
  commentsEnabled: getCommentsEnabled,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Event: async (parent) => {
    if (parent.eventId === null) return null;
    return await db.client.event.findFirst({
      where: {
        id: parent.eventId,
      },
    });
  },
  LineItems: async (parent) => {
    return await db.client.lineItem.findMany({
      where: {
        ticketId: parent.id,
      },
    });
  },
};
