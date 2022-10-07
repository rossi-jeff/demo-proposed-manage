import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { OccuranceType } from "./types";

export const getCreatedAt = (parent: OccuranceType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFrom = (parent: OccuranceType) => {
  return parent.from?.toString() ?? null;
};
export const getTo = (parent: OccuranceType) => {
  return parent.to?.toString() ?? null;
};
export const getUpdatedAt = (parent: OccuranceType) => {
  return parent.updatedAt != null ? parent.createdAt.toString() : null;
};
export const getVentureId = (parent: OccuranceType) => {
  return parent.ventureId ?? null;
};

export const Occurance: Resolvers["Occurance"] = {
  from: getFrom,
  to: getTo,
  ventureId: getVentureId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Venture: async (parent) => {
    if (parent.ventureId === null) return null;
    return await db.client.venture.findFirst({
      where: {
        id: parent.ventureId,
      },
    });
  },
};
