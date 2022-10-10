import { db } from "../db";
import { QueryResolvers, QuerySubLineItemArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getSubLineItems = async () => {
  return await db.client.subLineItem.findMany();
};

export const subLineItems: QueryResolvers["subLineItems"] = async () => {
  return await getSubLineItems();
};

export const getSubLineItem = async (args: QuerySubLineItemArgs) => {
  const { id } = idArgs(args);
  return await db.client.subLineItem.findFirst({
    where: {
      id,
    },
  });
};

export const subLineItem: QueryResolvers["subLineItem"] = async (
  _,
  args: QuerySubLineItemArgs
) => {
  return await getSubLineItem(args);
};
