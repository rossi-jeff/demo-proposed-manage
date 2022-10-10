import { db } from "../db";
import { QueryResolvers, QuerySettlementArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getSettlements = async () => {
  return await db.client.settlement.findMany();
};

export const settlements: QueryResolvers["settlements"] = async () => {
  return await getSettlements();
};

export const getSettlement = async (args: QuerySettlementArgs) => {
  const { id } = idArgs(args);
  return await db.client.settlement.findFirst({
    where: {
      id,
    },
  });
};

export const settlement: QueryResolvers["settlement"] = async (
  _,
  args: QuerySettlementArgs
) => {
  return await getSettlement(args);
};
