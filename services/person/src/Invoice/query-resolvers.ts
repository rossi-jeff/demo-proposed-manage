import { db } from "../db";
import { QueryResolvers, QueryInvoiceArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getInvoices = async () => {
  return await db.client.invoice.findMany();
};

export const invoices: QueryResolvers["invoices"] = async () => {
  return await getInvoices();
};

export const getInvoice = async (args: QueryInvoiceArgs) => {
  const { id } = idArgs(args);
  return await db.client.invoice.findFirst({
    where: {
      id,
    },
  });
};

export const invoice: QueryResolvers["invoice"] = async (
  _,
  args: QueryInvoiceArgs
) => {
  return await getInvoice(args);
};
