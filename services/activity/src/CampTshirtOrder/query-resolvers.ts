import { db } from "../db";
import {
  QueryResolvers,
  QueryCampTshirtOrderArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getCampTshirtOrders = async () => {
  return await db.client.campTshirtOrder.findMany();
};

export const campTshirtOrders: QueryResolvers["campTshirtOrders"] =
  async () => {
    return await getCampTshirtOrders();
  };

export const getCampTshirtOrder = async (args: QueryCampTshirtOrderArgs) => {
  const { id } = idArgs(args);
  return await db.client.campTshirtOrder.findFirst({
    where: {
      id,
    },
  });
};

export const campTshirtOrder: QueryResolvers["campTshirtOrder"] = async (
  _,
  args: QueryCampTshirtOrderArgs
) => {
  return await getCampTshirtOrder(args);
};
