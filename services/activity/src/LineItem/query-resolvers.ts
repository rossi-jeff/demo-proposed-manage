import { db } from "../db";
import { QueryResolvers, QueryLineItemArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getLineItems = async () => {
  return await db.client.lineItem.findMany();
};

export const lineItems: QueryResolvers["lineItems"] = async () => {
  return await getLineItems();
};

export const getLineItem = async (args: QueryLineItemArgs) => {
  const { id } = idArgs(args);
  return await db.client.lineItem.findFirst({
    where: {
      id,
    },
  });
};

export const lineItem: QueryResolvers["lineItem"] = async (
  _,
  args: QueryLineItemArgs
) => {
  return await getLineItem(args);
};
