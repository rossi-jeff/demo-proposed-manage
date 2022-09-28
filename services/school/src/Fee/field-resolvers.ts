import { Resolvers } from "../../generated/graphql";
import { FeeType, FeeTypeEnum } from "./types";

export const getAmount = (parent: FeeType) => {
  return parent.amount ?? null;
};
export const getCreatedAt = (parent: FeeType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getName = (parent: FeeType) => {
  return parent.name ?? null;
};
export const getType = (parent: FeeType) => {
  switch (parent.type) {
    case FeeTypeEnum.FLAT:
      return FeeTypeEnum.FLAT;
    case FeeTypeEnum.PERCENTAGE:
      return FeeTypeEnum.PERCENTAGE;
    default:
      return null;
  }
};
export const getUpdatedAt = (parent: FeeType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Fee: Resolvers["Fee"] = {
  type: getType,
  name: getName,
  amount: getAmount,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
