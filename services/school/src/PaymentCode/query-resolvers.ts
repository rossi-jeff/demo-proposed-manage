import { db } from "../db";
import { QueryResolvers, QueryPaymentCodeArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getPaymentCodes = async () => {
  return await db.client.paymentCode.findMany();
};

export const paymentCodes: QueryResolvers["paymentCodes"] = async () => {
  return await getPaymentCodes();
};

export const getPaymentCode = async (args: QueryPaymentCodeArgs) => {
  const { id } = idArgs(args);
  return await db.client.paymentCode.findFirst({
    where: {
      id,
    },
  });
};

export const paymentCode: QueryResolvers["paymentCode"] = async (
  _,
  args: QueryPaymentCodeArgs
) => {
  return await getPaymentCode(args);
};
