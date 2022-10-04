import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Event: Resolvers["Event"] = {
  DirectingRoles: async (parent) => {
    return await db.client.directingRole.findMany({
      where: {
        eventId: parent.id,
      },
    });
  },
};
