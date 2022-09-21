import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  Activities: async (parent) => {
    return await db.client.activity.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Addresses: async (parent) => {
    const schoolAddresses = await db.client.schoolAddress.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Address: true,
      },
    });
    return schoolAddresses.map((s) => s.Address);
  },
};
