import { Resolvers } from "../../generated/graphql";
import { LegalVideoConsentType } from "./types";

export const getCreatedAt = (parent: LegalVideoConsentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getLegalVideoId = (parent: LegalVideoConsentType) => {
  return parent.legalVideoId ?? null;
};
export const getPersonId = (parent: LegalVideoConsentType) => {
  return parent.personId ?? null;
};
export const getSeason = (parent: LegalVideoConsentType) => {
  return parent.season ?? null;
};
export const getUpdatedAt = (parent: LegalVideoConsentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const LegalVideoConsent: Resolvers["LegalVideoConsent"] = {
  legalVideoId: getLegalVideoId,
  personId: getPersonId,
  season: getSeason,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  LegalVideo: async (ref) => {
    if (ref.legalVideoId === null) return null;
    return {
      __typename: "LegalVideo",
      id: ref.legalVideoId,
    };
  },
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
};
