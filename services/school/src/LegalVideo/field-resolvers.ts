import { Resolvers } from "../../generated/graphql";
import { LegalVideoType } from "./types";

export const getCheckboxText = (parent: LegalVideoType) => {
  return parent.checkboxText ?? null;
};
export const getCreatedAt = (parent: LegalVideoType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getName = (parent: LegalVideoType) => {
  return parent.name ?? null;
};
export const getRemoteId = (parent: LegalVideoType) => {
  return parent.remoteId ?? null;
};
export const getRequireStudentSignOff = (parent: LegalVideoType) => {
  return parent.requireStudentSignOff ?? null;
};
export const getSchoolId = (parent: LegalVideoType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: LegalVideoType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const LegalVideo: Resolvers["LegalVideo"] = {
  schoolId: getSchoolId,
  name: getName,
  checkboxText: getCheckboxText,
  remoteId: getRemoteId,
  requireStudentSignOff: getRequireStudentSignOff,
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
