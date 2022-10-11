import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { PaymentCodeType } from "./types";

export const getActive = (parent: PaymentCodeType) => {
  return parent.active ?? null;
};
export const getCode = (parent: PaymentCodeType) => {
  return parent.code ?? null;
};
export const getCreatedAt = (parent: PaymentCodeType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getName = (parent: PaymentCodeType) => {
  return parent.name ?? null;
};
export const getSchoolId = (parent: PaymentCodeType) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (parent: PaymentCodeType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const PaymentCode: Resolvers["PaymentCode"] = {
  __resolveReference: async (ref) => {
    return await db.client.paymentCode.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  schoolId: getSchoolId,
  name: getName,
  code: getCode,
  active: getActive,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: async (parent) => {
    if (parent.schoolId === null) return null;
    return {
      __typename: "School",
      id: parent.schoolId,
    };
  },
};
