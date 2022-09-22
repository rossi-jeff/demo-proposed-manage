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
  Emails: async (parent) => {
    const schoolEmails = await db.client.schoolEmail.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Email: true,
      },
    });
    return schoolEmails.map((s) => s.Email);
  },
};
