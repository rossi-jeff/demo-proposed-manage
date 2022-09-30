import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { InvoiceTransactionType } from "./types";

export const getAdminFlag = (parent: InvoiceTransactionType) => {
  return parent.adminFlag ?? null;
};
export const getCreatedAt = (parent: InvoiceTransactionType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDetails = (parent: InvoiceTransactionType) => {
  return parent.details ?? null;
};
export const getInvoiceId = (parent: InvoiceTransactionType) => {
  return parent.invoiceId ?? null;
};
export const getPaymentType = (parent: InvoiceTransactionType) => {
  return parent.paymentType ?? null;
};
export const getProblemStatusAt = (parent: InvoiceTransactionType) => {
  return parent.problemStatusAt?.toString() ?? null;
};
export const getRemoteId = (parent: InvoiceTransactionType) => {
  return parent.remoteId ?? null;
};
export const getStatus = (parent: InvoiceTransactionType) => {
  return parent.status ?? null;
};
export const getUpdatedAt = (parent: InvoiceTransactionType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const InvoiceTransaction: Resolvers["InvoiceTransaction"] = {
  remoteId: getRemoteId,
  status: getStatus,
  invoiceId: getInvoiceId,
  paymentType: getPaymentType,
  adminFlag: getAdminFlag,
  problemStatusAt: getProblemStatusAt,
  details: getDetails,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Invoice: async (parent) => {
    if (parent.invoiceId === null) return null;
    return db.client.invoice.findFirst({
      where: {
        id: parent.invoiceId,
      },
    });
  },
};
