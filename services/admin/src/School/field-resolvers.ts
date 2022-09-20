import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  __resolveReference: async (obj) => {
    return await db.client.school.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  name: (parent) => {
    return parent.name ?? null;
  },
  subDomain: (parent) => {
    return parent.subDomain ?? null;
  },
  latitude: (parent) => {
    return parent.latitude ?? null;
  },
  longitude: (parent) => {
    return parent.longitude ?? null;
  },
  mascot: (parent) => {
    return parent.mascot ?? null;
  },
  feederTowns: (parent) => {
    return parent.feederTowns ?? null;
  },
  takingPayments: (parent) => {
    return parent.takingPayments ?? false;
  },
  paymentOptions: (parent) => {
    return parent.paymentOptions ?? null;
  },
  spendingCapMax: (parent) => {
    return parent.spendingCapMax ?? 0;
  },
  paymentCode: (parent) => {
    return parent.paymentCode ?? null;
  },
  smsMessaging: (parent) => {
    return parent.smsMessaging ?? false;
  },
  notifications: (parent) => {
    return parent.notifications ?? null;
  },
  notes: (parent) => {
    return parent.notes ?? null;
  },
  features: (parent) => {
    return parent.features ?? 0;
  },
  kind: (parent) => {
    return parent.kind ?? null;
  },
  tracked: (parent) => {
    return parent.tracked ?? false;
  },
  subMerchantId: (parent) => {
    return parent.subMerchantId ?? null;
  },
  a2kLinkSchoolId: (parent) => {
    return parent.a2kLinkSchoolId ?? 0;
  },
  createdAt: (parent) => {
    return parent.createdAt != null ? parent.createdAt.toString() : null;
  },
  updatedAt: (parent) => {
    return parent.updatedAt != null ? parent.updatedAt.toString() : null;
  },
};
