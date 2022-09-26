import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Activity: Resolvers["Activity"] = {
  Events: async (parent) => {
    return await db.client.event.findMany({
      where: {
        activityId: parent.id,
      },
    });
  },
  Groups: async (parent) => {
    return await db.client.group.findMany({
      where: {
        activityId: parent.id,
      },
    });
  },
};