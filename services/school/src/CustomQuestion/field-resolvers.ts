import { Resolvers } from "../../generated/graphql";
import { CustomQuestionType } from "./types";

export const getActive = (parent: CustomQuestionType) => {
  return parent.active ?? null;
};
export const getActivityType = (parent: CustomQuestionType) => {
  return parent.activityType ?? null;
};
export const getCreatedAt = (parent: CustomQuestionType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDependentAnswer = (parent: CustomQuestionType) => {
  return parent.dependentAnswer ?? null;
};
export const getDependentOn = (parent: CustomQuestionType) => {
  return parent.dependentOn ?? null;
};
export const getQuestion = (parent: CustomQuestionType) => {
  return parent.question ?? null;
};
export const getQuestionOptions = (parent: CustomQuestionType) => {
  return parent.questionOptions ?? null;
};
export const getQuestionType = (parent: CustomQuestionType) => {
  return parent.questionType ?? null;
};
export const getRequired = (parent: CustomQuestionType) => {
  return parent.required ?? null;
};
export const getSchoolId = (parent: CustomQuestionType) => {
  return parent.schoolId ?? null;
};
export const getSortOrder = (parent: CustomQuestionType) => {
  return parent.sortOrder ?? null;
};
export const getState = (parent: CustomQuestionType) => {
  return parent.state ?? null;
};
export const getUpdatedAt = (parent: CustomQuestionType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const CustomQuestion: Resolvers["CustomQuestion"] = {
  schoolId: getSchoolId,
  state: getState,
  question: getQuestion,
  questionType: getQuestionType,
  questionOptions: getQuestionOptions,
  active: getActive,
  required: getRequired,
  dependentOn: getDependentOn,
  dependentAnswer: getDependentAnswer,
  sortOrder: getSortOrder,
  activityType: getActivityType,
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
