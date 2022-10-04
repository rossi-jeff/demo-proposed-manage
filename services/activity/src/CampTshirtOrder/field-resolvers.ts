import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { CampTshirtOrderType } from "./types";

export const getBottomLineText = (parent: CampTshirtOrderType) => {
  return parent.bottomLineText ?? null;
};
export const getCampDataSubmitted = (parent: CampTshirtOrderType) => {
  return parent.campDataSubmitted ?? null;
};
export const getCoachEmail = (parent: CampTshirtOrderType) => {
  return parent.coachEmail ?? null;
};
export const getCoachId = (parent: CampTshirtOrderType) => {
  return parent.coachId ?? null;
};
export const getCoachName = (parent: CampTshirtOrderType) => {
  return parent.coachName ?? null;
};
export const getCoachPhoneNumber = (parent: CampTshirtOrderType) => {
  return parent.coachPhoneNumber ?? null;
};
export const getCreatedAt = (parent: CampTshirtOrderType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDeliveryDate = (parent: CampTshirtOrderType) => {
  return parent.deliveryDate?.toString() ?? null;
};
export const getMascotFile = (parent: CampTshirtOrderType) => {
  return parent.mascotFile ?? null;
};
export const getMiddleLineText = (parent: CampTshirtOrderType) => {
  return parent.middleLineText ?? null;
};
export const getOrderDate = (parent: CampTshirtOrderType) => {
  return parent.orderDate?.toString() ?? null;
};
export const getOrderOptions = (parent: CampTshirtOrderType) => {
  return parent.orderOptions ?? null;
};
export const getOrganizationColor1 = (parent: CampTshirtOrderType) => {
  return parent.organizationColor1 ?? null;
};
export const getOrganizationColor2 = (parent: CampTshirtOrderType) => {
  return parent.organizationColor2 ?? null;
};
export const getOrganizationName = (parent: CampTshirtOrderType) => {
  return parent.organizationName ?? null;
};
export const getOverfillPercentage = (parent: CampTshirtOrderType) => {
  return parent.overfillPercentage ?? null;
};
export const getParticipants = (parent: CampTshirtOrderType) => {
  return parent.participants ?? null;
};
export const getSchoolId = (parent: CampTshirtOrderType) => {
  return parent.schoolId ?? null;
};
export const getSeason = (parent: CampTshirtOrderType) => {
  return parent.season ?? null;
};
export const getShirtSizes = (parent: CampTshirtOrderType) => {
  return parent.shirtSizes ?? null;
};
export const getTShirtColor = (parent: CampTshirtOrderType) => {
  return parent.tShirtColor ?? null;
};
export const getTShirtQuantity = (parent: CampTshirtOrderType) => {
  return parent.tShirtQuantity ?? null;
};
export const getTemplate = (parent: CampTshirtOrderType) => {
  return parent.template ?? null;
};
export const getTopLineText = (parent: CampTshirtOrderType) => {
  return parent.topLineText ?? null;
};
export const getUpdatedAt = (parent: CampTshirtOrderType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getVentureId = (parent: CampTshirtOrderType) => {
  return parent.ventureId ?? null;
};
export const getVentureName = (parent: CampTshirtOrderType) => {
  return parent.ventureName ?? null;
};

export const CampTshirtOrder: Resolvers["CampTshirtOrder"] = {
  ventureId: getVentureId,
  coachId: getCoachId,
  schoolId: getSchoolId,
  season: getSeason,
  organizationName: getOrganizationName,
  ventureName: getVentureName,
  organizationColor1: getOrganizationColor1,
  organizationColor2: getOrganizationColor2,
  coachName: getCoachName,
  coachEmail: getCoachEmail,
  coachPhoneNumber: getCoachPhoneNumber,
  deliveryDate: getDeliveryDate,
  campDataSubmitted: getCampDataSubmitted,
  orderDate: getOrderDate,
  template: getTemplate,
  topLineText: getTopLineText,
  middleLineText: getMiddleLineText,
  bottomLineText: getBottomLineText,
  tShirtColor: getTShirtColor,
  orderOptions: getOrderOptions,
  shirtSizes: getShirtSizes,
  participants: getParticipants,
  tShirtQuantity: getTShirtQuantity,
  overfillPercentage: getOverfillPercentage,
  mascotFile: getMascotFile,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  CampShortOrders: async (parent) => {
    return await db.client.campShortOrder.findMany({
      where: {
        campTShirtOrderId: parent.id,
      },
    });
  },
  Coach: async (ref) => {
    if (ref.coachId === null) return null;
    return {
      __typename: "Person",
      id: ref.coachId,
    };
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
  Venture: async (parent) => {
    if (parent.ventureId === null) return null;
    return await db.client.venture.findFirst({
      where: {
        id: parent.ventureId,
      },
    });
  },
};
