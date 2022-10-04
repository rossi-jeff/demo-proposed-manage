import { Resolvers } from "../../generated/graphql";
import { CoachCertificationType } from "./types";

export const getCode = (parent: CoachCertificationType) => {
  return parent.code ?? null;
};
export const getCreatedAt = (parent: CoachCertificationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getPersonId = (parent: CoachCertificationType) => {
  return parent.personId ?? null;
};
export const getState = (parent: CoachCertificationType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: CoachCertificationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getValue = (parent: CoachCertificationType) => {
  return parent.value ?? null;
};

export const CoachCertification: Resolvers["CoachCertification"] = {
  personId: getPersonId,
  value: getValue,
  state: getState,
  code: getCode,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Person: async (parent) => {
    if (parent.personId === null) return null;
    return {
      __typename: "Person",
      id: parent.personId,
    };
  },
};
