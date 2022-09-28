import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  Invites: async (parent) => {
    return await db.client.invite.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
};
