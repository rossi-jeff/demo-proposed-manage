import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { EmailType, EmailTypeEnum } from "./types";

export const getAddress = (parent: EmailType) => {
  return parent.address ?? null;
};
export const getCreatedAt = (parent: EmailType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getType = (parent: EmailType) => {
  return parent.type == EmailTypeEnum.BUSINESS
    ? EmailTypeEnum.BUSINESS
    : parent.type == EmailTypeEnum.PERSONAL
    ? EmailTypeEnum.PERSONAL
    : null;
};
export const getUpdatedAt = (parent: EmailType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Email: Resolvers["Email"] = {
  __resolveReference: async (obj) => {
    return await db.client.email.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  type: getType,
  address: getAddress,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
