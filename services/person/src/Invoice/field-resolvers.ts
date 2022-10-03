import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { InvoiceType } from "./types";

export const getCreatedAt = (parent: InvoiceType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getCredit = (parent: InvoiceType) => {
  return parent.credit ?? null;
};
export const getInvoiceTransactionId = (parent: InvoiceType) => {
  return parent.invoiceTransactionId ?? null;
};
export const getPersonId = (parent: InvoiceType) => {
  return parent.personId ?? null;
};
export const getUpdatedAt = (parent: InvoiceType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Invoice: Resolvers["Invoice"] = {
  __resolveReference: async (ref) => {
    return await db.client.invoice.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  personId: getPersonId,
  credit: getCredit,
  invoiceTransactionId: getInvoiceTransactionId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  InvoiceTransaction: async (parent) => {
    if (parent.invoiceTransactionId === null) return null;
    return await db.client.invoiceTransaction.findFirst({
      where: {
        id: parent.invoiceTransactionId,
      },
    });
  },
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
};
