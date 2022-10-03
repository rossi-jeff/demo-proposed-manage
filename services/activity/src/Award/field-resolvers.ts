import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Award: Resolvers["Award"] = {
  AwardAssignments: async (parent) => {
    return await db.client.awardAssignment.findMany({
      where: {
        awardId: parent.id,
      },
    });
  },
};
