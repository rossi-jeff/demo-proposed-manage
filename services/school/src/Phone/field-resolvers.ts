import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { PhoneType, PhoneTypeEnum } from "./types";

export const getCreatedAt = (parent: PhoneType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getNumber = (parent: PhoneType) => {
  return parent.number ?? null;
};
export const getType = (parent: PhoneType) => {
  switch (parent.type) {
    case PhoneTypeEnum.CELL:
      return PhoneTypeEnum.CELL;
    case PhoneTypeEnum.FAX:
      return PhoneTypeEnum.FAX;
    case PhoneTypeEnum.HOME:
      return PhoneTypeEnum.HOME;
    case PhoneTypeEnum.OFFICE:
      return PhoneTypeEnum.OFFICE;
    default:
      return null;
  }
};
export const getUpdatedAt = (parent: PhoneType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Phone: Resolvers["Phone"] = {
  __resolveReference: async (obj) => {
    return await db.client.phone.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  type: getType,
  number: getNumber,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
