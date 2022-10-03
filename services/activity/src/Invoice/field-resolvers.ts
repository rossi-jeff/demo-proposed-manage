import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Invoice: Resolvers["Invoice"] = {
  LineItems: async (parent) => {
    return await db.client.lineItem.findMany({
      where: {
        invoiceId: parent.id,
      },
    });
  },
};
