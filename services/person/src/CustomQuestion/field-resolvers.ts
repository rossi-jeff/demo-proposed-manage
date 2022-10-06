import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const CustomQuestion: Resolvers["CustomQuestion"] = {
  CustomAnswers: async (parent) => {
    return await db.client.customAnswer.findMany({
      where: {
        questionId: parent.id,
      },
    });
  },
};
