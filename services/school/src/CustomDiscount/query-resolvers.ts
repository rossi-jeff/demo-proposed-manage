import { db } from "../db";
import {
  QueryResolvers,
  QueryCustomDiscountArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getCustomDiscounts = async () => {
  return await db.client.customDiscount.findMany();
};

export const customDiscounts: QueryResolvers["customDiscounts"] = async () => {
  return await getCustomDiscounts();
};

export const getCustomDiscount = async (args: QueryCustomDiscountArgs) => {
  const { id } = idArgs(args);
  return await db.client.customDiscount.findFirst({
    where: {
      id,
    },
  });
};

export const customDiscount: QueryResolvers["customDiscount"] = async (
  _,
  args: QueryCustomDiscountArgs
) => {
  return await getCustomDiscount(args);
};
