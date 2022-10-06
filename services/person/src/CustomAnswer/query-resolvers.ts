import { db } from "../db";
import { QueryResolvers, QueryCustomAnswerArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getCustomAnswers = async () => {
  return await db.client.customAnswer.findMany();
};

export const customAnswers: QueryResolvers["customAnswers"] = async () => {
  return await getCustomAnswers();
};

export const getCustomAnswer = async (args: QueryCustomAnswerArgs) => {
  const { id } = idArgs(args);
  return await db.client.customAnswer.findFirst({
    where: {
      id,
    },
  });
};

export const customAnswer: QueryResolvers["customAnswer"] = async (
  _,
  args: QueryCustomAnswerArgs
) => {
  return await getCustomAnswer(args);
};
