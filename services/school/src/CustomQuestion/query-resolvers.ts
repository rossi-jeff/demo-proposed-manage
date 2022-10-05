import { db } from "../db";
import {
  QueryCustomQuestionArgs,
  QueryResolvers,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getCustomQuestions = async () => {
  return await db.client.customQuestion.findMany();
};

export const customQuestions: QueryResolvers["customQuestions"] = async () => {
  return await getCustomQuestions();
};

export const getCustomQuestion = async (args: QueryCustomQuestionArgs) => {
  const { id } = idArgs(args);
  return await db.client.customQuestion.findFirst({
    where: {
      id,
    },
  });
};

export const customQuestion: QueryResolvers["customQuestion"] = async (
  _,
  args: QueryCustomQuestionArgs
) => {
  return await getCustomQuestion(args);
};
