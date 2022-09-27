import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  AlergicConditions: async (parent) => {
    return await db.client.alergicCondition.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  EmergencyContacts: async (parent) => {
    return await db.client.emergencyContact.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
};
