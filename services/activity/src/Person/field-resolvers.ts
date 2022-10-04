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
};
