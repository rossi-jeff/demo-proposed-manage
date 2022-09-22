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
  Phones: async (parent) => {
    const schollPhones = await db.client.schoolPhone.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Phone: true,
      },
    });
    return schollPhones.map((s) => s.Phone);
  },
};
