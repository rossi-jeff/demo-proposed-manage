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
  FuelMyClubActivity: async (parent) => {
    return await db.client.fuelMyClubActivity.findFirst({
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
  Registrations: async (parent) => {
    return await db.client.registration.findMany({
      where: {
        activityId: parent.id,
      },
    });
  },
  Ventures: async (parent) => {
    return await db.client.venture.findMany({
      where: {
        activityId: parent.id,
      },
    });
  },
};
