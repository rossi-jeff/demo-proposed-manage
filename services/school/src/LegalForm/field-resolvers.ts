import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { LegalFormType } from "./types";

export const getCheckboxText = (parent: LegalFormType) => {
  return parent.checkboxText ?? null;
};
export const getCreatedAt = (parent: LegalFormType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEmailToChild = (parent: LegalFormType) => {
  return parent.emailToChild ?? null;
};
export const getFile = (parent: LegalFormType) => {
  return parent.file ?? null;
};
export const getName = (parent: LegalFormType) => {
  return parent.name ?? null;
};
export const getRequireStudentSignOff = (parent: LegalFormType) => {
  return parent.requireStudentSignOff ?? null;
};
export const getSchoolId = (parent: LegalFormType) => {
  return parent.schoolId ?? null;
};
export const getState = (parent: LegalFormType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: LegalFormType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const LegalForm: Resolvers["LegalForm"] = {
  __resolveReference: async (obj) => {
    return await db.client.legalForm.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  schoolId: getSchoolId,
  name: getName,
  checkboxText: getCheckboxText,
  emailToChild: getEmailToChild,
  file: getFile,
  requireStudentSignOff: getRequireStudentSignOff,
  state: getState,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
