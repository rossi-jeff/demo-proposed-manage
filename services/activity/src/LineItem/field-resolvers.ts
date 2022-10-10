import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { LineItemType } from "./types";

export const getActivityName = (parent: LineItemType) => {
  return parent.activityName ?? null;
};
export const getCreatedAt = (parent: LineItemType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEventName = (parent: LineItemType) => {
  return parent.eventName ?? null;
};
export const getInvoiceId = (parent: LineItemType) => {
  return parent.invoiceId ?? null;
};
export const getPaid = (parent: LineItemType) => {
  return parent.paid ?? null;
};
export const getPrice = (parent: LineItemType) => {
  return parent.price ?? null;
};
export const getRefundAmount = (parent: LineItemType) => {
  return parent.refundAmount ?? null;
};
export const getRefunded = (parent: LineItemType) => {
  return parent.refunded ?? null;
};
export const getRegistrationId = (parent: LineItemType) => {
  return parent.registrationId ?? null;
};
export const getState = (parent: LineItemType) => {
  return parent.state ?? null;
};
export const getTicketId = (parent: LineItemType) => {
  return parent.ticketId ?? null;
};
export const getTicketKind = (parent: LineItemType) => {
  return parent.ticketKind ?? null;
};
export const getUpdatedAt = (parent: LineItemType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getVentureId = (parent: LineItemType) => {
  return parent.ventureId ?? null;
};
export const getVentureName = (parent: LineItemType) => {
  return parent.ventureName ?? null;
};

export const LineItem: Resolvers["LineItem"] = {
  registrationId: getRegistrationId,
  ventureId: getVentureId,
  activityName: getActivityName,
  ventureName: getVentureName,
  price: getPrice,
  invoiceId: getInvoiceId,
  refunded: getRefunded,
  paid: getPaid,
  refundAmount: getRefundAmount,
  ticketKind: getTicketKind,
  eventName: getEventName,
  ticketId: getTicketId,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Invoice: async (ref) => {
    if (ref.invoiceId === null) return null;
    return {
      __typename: "Invoice",
      id: ref.invoiceId,
    };
  },
  Registration: async (parent) => {
    if (parent.registrationId === null) return null;
    return await db.client.registration.findFirst({
      where: {
        id: parent.registrationId,
      },
    });
  },
  SubLineItems: async (parent) => {
    return await db.client.subLineItem.findMany({
      where: {
        lineItemId: parent.id,
      },
    });
  },
  Ticket: async (parent) => {
    if (parent.ticketId === null) return null;
    return await db.client.ticket.findFirst({
      where: {
        id: parent.ticketId,
      },
    });
  },
  TicketRegistrations: async (parent) => {
    return await db.client.ticketRegistration.findMany({
      where: {
        lineItemId: parent.id,
      },
    });
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
