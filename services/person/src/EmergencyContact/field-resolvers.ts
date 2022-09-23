import { Resolvers } from "../../generated/graphql";
import { EmergencyContactType } from "./types";

export const getCreatedAt = (parent: EmergencyContactType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFirstName = (parent: EmergencyContactType) => {
  return parent.firstName ?? null;
};
export const getLastName = (parent: EmergencyContactType) => {
  return parent.lastName ?? null;
};
export const getPersonId = (parent: EmergencyContactType) => {
  return parent.personId ?? null;
};
export const getPhoneNumber = (parent: EmergencyContactType) => {
  return parent.phoneNumber ?? null;
};
export const getRelationship = (parent: EmergencyContactType) => {
  return parent.relationship ?? null;
};
export const getUpdatedAt = (parent: EmergencyContactType) => {
  return parent.updatedAt != null ? parent.createdAt.toString() : null;
};

export const EmergencyContact: Resolvers["EmergencyContact"] = {
  personId: getPersonId,
  firstName: getFirstName,
  lastName: getLastName,
  phoneNumber: getPhoneNumber,
  relationship: getRelationship,
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
