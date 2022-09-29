import { db } from "../db";
import { QueryResolvers, QueryAwardArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getAwards = async () => {
  return await db.client.award.findMany();
};

export const awards: QueryResolvers["awards"] = async () => {
  return await getAwards();
};

export const getAward = async (args: QueryAwardArgs) => {
  const { id } = idArgs(args);
  return await db.client.award.findFirst({
    where: {
      id,
    },
  });
};

export const award: QueryResolvers["award"] = async (
  _,
  args: QueryAwardArgs
) => {
  return await getAward(args);
};
