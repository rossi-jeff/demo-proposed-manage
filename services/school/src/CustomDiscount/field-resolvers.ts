import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { CustomDiscountType } from "./types";

export const getActive = (parent: CustomDiscountType) => {
  return parent.active ?? null;
};
export const getActivityId = (parent: CustomDiscountType) => {
  return parent.activityId ?? null;
};
export const getCondition = (parent: CustomDiscountType) => {
  return parent.condition ?? null;
};
export const getCreatedAt = (parent: CustomDiscountType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDiscountedFee = (parent: CustomDiscountType) => {
  return parent.discountedFee ?? null;
};
export const getKind = (parent: CustomDiscountType) => {
  return parent.kind ?? null;
};
export const getSchoolId = (parent: CustomDiscountType) => {
  return parent.schoolId ?? null;
};
export const getSecondaryCondition = (parent: CustomDiscountType) => {
  return parent.secondaryCondition ?? null;
};
export const getUpdatedAt = (parent: CustomDiscountType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const CustomDiscount: Resolvers["CustomDiscount"] = {
  schoolId: getSchoolId,
  kind: getKind,
  condition: getCondition,
  active: getActive,
  discountedFee: getDiscountedFee,
  activityId: getActivityId,
  secondaryCondition: getSecondaryCondition,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (parent) => {
    if (parent.activityId === null) return null;
    return await db.client.activity.findFirst({
      where: {
        id: parent.activityId,
      },
    });
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
