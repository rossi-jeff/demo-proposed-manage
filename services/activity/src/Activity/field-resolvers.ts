import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Activity: Resolvers["Activity"] = {
  Groups: async (parent) => {
    return await db.client.group.findMany({
      where: {
        activityId: parent.id,
      },
    });
  },
};
