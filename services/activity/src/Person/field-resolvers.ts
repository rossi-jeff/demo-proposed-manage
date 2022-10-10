import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  CampTshirtOrders: async (parent) => {
    return await db.client.campTshirtOrder.findMany({
      where: {
        coachId: parent.id,
      },
    });
  },
  SentMessages: async (parent) => {
    return await db.client.message.findMany({
      where: {
        senderId: parent.id,
      },
    });
  },
  TicketRegistrations: async (parent) => {
    return await db.client.ticketRegistration.findMany({
      where: {
        studentId: parent.id,
      },
    });
  },
};
