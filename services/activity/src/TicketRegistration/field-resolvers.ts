import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { TicketRegistrationType } from "./types";

export const getComment = (parent: TicketRegistrationType) => {
  return parent.comment ?? null;
};
export const getConfirmationNumber = (parent: TicketRegistrationType) => {
  return parent.confirmationNumber ?? null;
};
export const getCreatedAt = (parent: TicketRegistrationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getLineItemId = (parent: TicketRegistrationType) => {
  return parent.lineItemId ?? null;
};
export const getRegistrationId = (parent: TicketRegistrationType) => {
  return parent.registrationId ?? null;
};
export const getState = (parent: TicketRegistrationType) => {
  return parent.state ?? null;
};
export const getStudentId = (parent: TicketRegistrationType) => {
  return parent.studentId ?? null;
};
export const getTicketEmail = (parent: TicketRegistrationType) => {
  return parent.ticketEmail ?? null;
};
export const getTicketId = (parent: TicketRegistrationType) => {
  return parent.ticketId ?? null;
};
export const getTicketholderFirstName = (parent: TicketRegistrationType) => {
  return parent.ticketholderFirstName ?? null;
};
export const getTicketholderLastName = (parent: TicketRegistrationType) => {
  return parent.ticketholderLastName ?? null;
};
export const getUpdatedAt = (parent: TicketRegistrationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const TicketRegistration: Resolvers["TicketRegistration"] = {
  registrationId: getRegistrationId,
  ticketId: getTicketId,
  state: getState,
  ticketholderFirstName: getTicketholderFirstName,
  ticketEmail: getTicketEmail,
  studentId: getStudentId,
  lineItemId: getLineItemId,
  confirmationNumber: getConfirmationNumber,
  ticketholderLastName: getTicketholderLastName,
  comment: getComment,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  LineItem: async (parent) => {
    if (parent.lineItemId === null) return null;
    return await db.client.lineItem.findFirst({
      where: {
        id: parent.lineItemId,
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
  Student: async (ref) => {
    if (ref.studentId === null) return null;
    return {
      __typename: "Person",
      id: ref.studentId,
    };
  },
  Ticket: async (parent) => {
    if (parent.ticketId === null) return null;
    return await db.client.ticket.findFirst({
      where: {
        id: parent.ticketId,
      },
    });
  },
};
