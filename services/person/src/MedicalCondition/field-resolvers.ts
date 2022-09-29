import { Resolvers } from "../../generated/graphql";
import { MedicalConditionType } from "./types";

export const getCreatedAt = (parent: MedicalConditionType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDateOfDiagnosis = (parent: MedicalConditionType) => {
  return parent.dateOfDiagnosis?.toString() ?? null;
};
export const getEmergencyPlan = (parent: MedicalConditionType) => {
  return parent.emergencyPlan ?? null;
};
export const getName = (parent: MedicalConditionType) => {
  return parent.name ?? null;
};
export const getPersonId = (parent: MedicalConditionType) => {
  return parent.personId ?? null;
};
export const getPhysician = (parent: MedicalConditionType) => {
  return parent.physician ?? null;
};
export const getUpdatedAt = (parent: MedicalConditionType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const MedicalCondition: Resolvers["MedicalCondition"] = {
  personId: getPersonId,
  name: getName,
  physician: getPhysician,
  dateOfDiagnosis: getDateOfDiagnosis,
  emergencyPlan: getEmergencyPlan,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
};
