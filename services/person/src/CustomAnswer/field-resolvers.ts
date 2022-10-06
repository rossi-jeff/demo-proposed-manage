import { Resolvers } from "../../generated/graphql";
import { CustomAnswerType } from "./types";

export const getAnswer = (parent: CustomAnswerType) => {
  return parent.answer ?? null;
};
export const getCreatedAt = (parent: CustomAnswerType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getPersonId = (parent: CustomAnswerType) => {
  return parent.personId ?? null;
};
export const getQuestionId = (parent: CustomAnswerType) => {
  return parent.questionId ?? null;
};
export const getUpdatedAt = (parent: CustomAnswerType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const CustomAnswer: Resolvers["CustomAnswer"] = {
  personId: getPersonId,
  questionId: getQuestionId,
  answer: getAnswer,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  CustomQuestion: async (ref) => {
    if (ref.questionId === null) return null;
    return {
      __typename: "CustomQuestion",
      id: ref.questionId,
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
