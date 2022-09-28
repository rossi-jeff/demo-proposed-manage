import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryFeeArgs } from "../../generated/graphql";
import { db } from "../db";

export const getFees = async () => {
  return await db.client.fee.findMany();
};

export const fees: QueryResolvers["fees"] = async () => {
  return await getFees();
};

export const getFee = async (args: QueryFeeArgs) => {
  const { id } = idArgs(args);
  return await db.client.fee.findFirst({
    where: {
      id,
    },
  });
};

export const fee: QueryResolvers["fee"] = async (_, args: QueryFeeArgs) => {
  return await getFee(args);
};
