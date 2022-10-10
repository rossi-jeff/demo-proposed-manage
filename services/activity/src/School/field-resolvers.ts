import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  CampTshirtOrders: async (parent) => {
    return await db.client.campTshirtOrder.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Messages: async (parent) => {
    return await db.client.message.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
};
