import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Message: Resolvers["Message"] = {
  Recipients: async (parent) => {
    const messagePeople = await db.client.messagePerson.findMany({
      where: {
        messageId: parent.id,
      },
    });
    return messagePeople.map((m) => {
      return { __typename: "Person", id: m.personId };
    });
  },
};
