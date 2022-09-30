import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const LegalForm: Resolvers["LegalForm"] = {
  Consents: async (parent) => {
    return await db.client.consent.findMany({
      where: {
        legalFormId: parent.id,
      },
    });
  },
};
