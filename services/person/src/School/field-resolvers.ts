import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  Affiliations: async (parent) => {
    return await db.client.affiliation.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Invites: async (parent) => {
    return await db.client.invite.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
};
