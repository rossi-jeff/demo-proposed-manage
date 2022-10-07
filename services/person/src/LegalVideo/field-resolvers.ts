import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const LegalVideo: Resolvers["LegalVideo"] = {
  LegalVideoConsents: async (parent) => {
    return await db.client.legalVideoConsent.findMany({
      where: {
        legalVideoId: parent.id,
      },
    });
  },
};
