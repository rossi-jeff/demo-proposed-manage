import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { CampShortOrderType } from "./types";

export const getBottomLineText = (parent: CampShortOrderType) => {
  return parent.bottomLineText ?? null;
};
export const getCampTShirtOrderId = (parent: CampShortOrderType) => {
  return parent.campTShirtOrderId ?? null;
};
export const getCreatedAt = (parent: CampShortOrderType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDesignChoice = (parent: CampShortOrderType) => {
  return parent.designChoice ?? null;
};
export const getDesignLayout = (parent: CampShortOrderType) => {
  return parent.designLayout ?? null;
};
export const getParticipants = (parent: CampShortOrderType) => {
  return parent.participants ?? null;
};
export const getShortSizes = (parent: CampShortOrderType) => {
  return parent.shortSizes ?? null;
};
export const getTopLineText = (parent: CampShortOrderType) => {
  return parent.topLineText ?? null;
};
export const getUpdatedAt = (parent: CampShortOrderType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const CampShortOrder: Resolvers["CampShortOrder"] = {
  campTShirtOrderId: getCampTShirtOrderId,
  designLayout: getDesignLayout,
  designChoice: getDesignChoice,
  topLineText: getTopLineText,
  bottomLineText: getBottomLineText,
  shortSizes: getShortSizes,
  participants: getParticipants,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  CampTshirtOrder: async (parent) => {
    if (parent.campTShirtOrderId === null) return null;
    return await db.client.campTshirtOrder.findFirst({
      where: {
        id: parent.campTShirtOrderId,
      },
    });
  },
};
