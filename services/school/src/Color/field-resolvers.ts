import { Resolvers } from "../../generated/graphql";
import { ColorType } from "./types";

/*
export const get_ = (parent: ColorType) => {
  return parent ?? null;
};
*/
export const getCreatedAt = (parent: ColorType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getName = (parent: ColorType) => {
  return parent.name ?? null;
};
export const getSchoolId = (parent: ColorType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: ColorType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Color: Resolvers["Color"] = {
  name: getName,
  schoolId: getSchoolId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
