import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { SchoolType } from "./types";

export const getName = (parent: SchoolType) => {
  return parent.name ?? null;
};
export const getSubDomain = (parent: SchoolType) => {
  return parent.subDomain ?? null;
};
export const getLatitude = (parent: SchoolType) => {
  return parent.latitude ?? null;
};
export const getLongitude = (parent: SchoolType) => {
  return parent.longitude ?? null;
};
export const getMascot = (parent: SchoolType) => {
  return parent.mascot ?? null;
};
export const getFeederTowns = (parent: SchoolType) => {
  return parent.feederTowns ?? null;
};
export const getTakingPayments = (parent: SchoolType) => {
  return parent.takingPayments ?? null;
};
export const getPaymentOptions = (parent: SchoolType) => {
  return parent.paymentOptions ?? null;
};
export const getSpendingCapMax = (parent: SchoolType) => {
  return parent.spendingCapMax ?? null;
};
export const getPaymentCode = (parent: SchoolType) => {
  return parent.paymentCode ?? null;
};
export const getSmsMessaging = (parent: SchoolType) => {
  return parent.smsMessaging ?? null;
};
export const getNotifications = (parent: SchoolType) => {
  return parent.notifications ?? null;
};
export const getNotes = (parent: SchoolType) => {
  return parent.notes ?? null;
};
export const getFeatures = (parent: SchoolType) => {
  return parent.features ?? null;
};
export const getKind = (parent: SchoolType) => {
  return parent.kind ?? null;
};
export const getTracked = (parent: SchoolType) => {
  return parent.tracked ?? null;
};
export const getSubMerchantId = (parent: SchoolType) => {
  return parent.subMerchantId ?? null;
};
export const getA2kLinkSchoolId = (parent: SchoolType) => {
  return parent.a2kLinkSchoolId ?? null;
};
export const getCreatedAt = (parent: SchoolType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getUpdatedAt = (parent: SchoolType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const School: Resolvers["School"] = {
  __resolveReference: async (obj) => {
    return await db.client.school.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  name: getName,
  subDomain: getSubDomain,
  latitude: getLatitude,
  longitude: getLongitude,
  mascot: getMascot,
  feederTowns: getFeederTowns,
  takingPayments: getTakingPayments,
  paymentOptions: getPaymentOptions,
  spendingCapMax: getSpendingCapMax,
  paymentCode: getPaymentCode,
  smsMessaging: getSmsMessaging,
  notifications: getNotifications,
  notes: getNotes,
  features: getFeatures,
  kind: getKind,
  tracked: getTracked,
  subMerchantId: getSubMerchantId,
  a2kLinkSchoolId: getA2kLinkSchoolId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
