import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryVentureArgs } from "../../generated/graphql";
import { db } from "../db";

export const getVentures = async () => {
  return await db.client.venture.findMany();
};

export const ventures: QueryResolvers["ventures"] = async () => {
  return await getVentures();
};

export const getVenture = async (args: QueryVentureArgs) => {
  const { id } = idArgs(args);
  return await db.client.venture.findFirst({
    where: {
      id,
    },
  });
};

export const venture: QueryResolvers["venture"] = async (
  _,
  args: QueryVentureArgs
) => {
  return await getVenture(args);
};
