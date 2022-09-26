import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryGroupArgs } from "../../generated/graphql";
import { db } from "../db";

export const getGroups = async () => {
  return await db.client.group.findMany();
};

export const groups: QueryResolvers["groups"] = async () => {
  return await getGroups();
};

export const getGroup = async (args: QueryGroupArgs) => {
  const { id } = idArgs(args);
  return await db.client.group.findFirst({
    where: {
      id,
    },
  });
};

export const group: QueryResolvers["group"] = async (
  _,
  args: QueryGroupArgs
) => {
  return await getGroup(args);
};
