import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  People: async (parent) => {
    return await db.client.person.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
};
