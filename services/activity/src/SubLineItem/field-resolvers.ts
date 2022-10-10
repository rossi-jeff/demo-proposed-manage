import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { SubLineItemType } from "./types";

export const getAmount = (parent: SubLineItemType) => {
  return parent.amount ?? null;
};
export const getCreatedAt = (parent: SubLineItemType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getLineItemId = (parent: SubLineItemType) => {
  return parent.lineItemId ?? null;
};
export const getRemoteId = (parent: SubLineItemType) => {
  return parent.remoteId ?? null;
};
export const getSettledAt = (parent: SubLineItemType) => {
  return parent.settledAt?.toString() ?? null;
};
export const getType = (parent: SubLineItemType) => {
  return parent.type ?? null;
};
export const getUpdatedAt = (parent: SubLineItemType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const SubLineItem: Resolvers["SubLineItem"] = {
  lineItemId: getLineItemId,
  type: getType,
  amount: getAmount,
  settledAt: getSettledAt,
  remoteId: getRemoteId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  LineItem: async (parent) => {
    if (parent.lineItemId === null) return null;
    return await db.client.lineItem.findFirst({
      where: {
        id: parent.lineItemId,
      },
    });
  },
};
