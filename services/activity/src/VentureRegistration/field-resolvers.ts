import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { VentureRegistrationType } from "./types";

export const getComment = (parent: VentureRegistrationType) => {
  return parent.comment ?? null;
};
export const getCreatedAt = (parent: VentureRegistrationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getPaymentCodeId = (parent: VentureRegistrationType) => {
  return parent.paymentCodeId ?? null;
};
export const getRegistrationId = (parent: VentureRegistrationType) => {
  return parent.registrationId ?? null;
};
export const getState = (parent: VentureRegistrationType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: VentureRegistrationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getVentureId = (parent: VentureRegistrationType) => {
  return parent.ventureId ?? null;
};

export const VentureRegistration: Resolvers["VentureRegistration"] = {
  registrationId: getRegistrationId,
  ventureId: getVentureId,
  state: getState,
  comment: getComment,
  paymentCodeId: getPaymentCodeId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  PaymentCode: async (ref) => {
    if (ref.paymentCodeId === null) return null;
    return {
      __typename: "PaymentCode",
      id: ref.paymentCodeId,
    };
  },
  Registration: async (parent) => {
    if (parent.registrationId === null) return null;
    return await db.client.registration.findFirst({
      where: {
        id: parent.registrationId,
      },
    });
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
