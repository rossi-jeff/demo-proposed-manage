import { Resolvers } from "../../generated/graphql";
import { MedicalFormType } from "./types";

export const getCreatedAt = (parent: MedicalFormType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getFile = (parent: MedicalFormType) => {
  return parent.file ?? null;
};
export const getFreshmanOnly = (parent: MedicalFormType) => {
  return parent.freshmanOnly ?? null;
};
export const getName = (parent: MedicalFormType) => {
  return parent.name ?? null;
};
export const getSchoolId = (parent: MedicalFormType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: MedicalFormType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const MedicalForm: Resolvers["MedicalForm"] = {
  schoolId: getSchoolId,
  name: getName,
  file: getFile,
  freshmanOnly: getFreshmanOnly,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
