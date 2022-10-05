import { db } from "../db";
import { QueryResolvers, QueryGroupAwardArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getGroupAwards = async () => {
  return await db.client.groupAward.findMany();
};

export const groupAwards: QueryResolvers["groupAwards"] = async () => {
  return await getGroupAwards();
};

export const getGroupAward = async (args: QueryGroupAwardArgs) => {
  const { id } = idArgs(args);
  return await db.client.groupAward.findFirst({
    where: {
      id,
    },
  });
};

export const groupAward: QueryResolvers["groupAward"] = async (
  _,
  args: QueryGroupAwardArgs
) => {
  return await getGroupAward(args);
};
