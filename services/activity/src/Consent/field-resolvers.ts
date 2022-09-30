import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { ConsentType } from "./types";

export const getAccepted = (parent: ConsentType) => {
  return parent.accepted ?? null;
};
export const getCheckboxText = (parent: ConsentType) => {
  return parent.checkboxText ?? null;
};
export const getCreatedAt = (parent: ConsentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getLegalFormId = (parent: ConsentType) => {
  return parent.legalFormId ?? null;
};
export const getRegistrationId = (parent: ConsentType) => {
  return parent.registrationId ?? null;
};
export const getSha1 = (parent: ConsentType) => {
  return parent.sha1 ?? null;
};
export const getUpdatedAt = (parent: ConsentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Consent: Resolvers["Consent"] = {
  __resolveReference: async (ref) => {
    return await db.client.consent.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  legalFormId: getLegalFormId,
  registrationId: getRegistrationId,
  accepted: getAccepted,
  checkboxText: getCheckboxText,
  sha1: getSha1,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  LegalForm: async (parent) => {
    if (parent.legalFormId === null) return null;
    return {
      __typename: "LegalForm",
      id: parent.legalFormId,
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
};
