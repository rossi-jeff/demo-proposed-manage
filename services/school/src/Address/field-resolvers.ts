import { Resolvers } from "../../generated/graphql";
import { AddressType, AddresTypeEnum } from "./types";
import { db } from "../db";

export const getType = (parent: AddressType) => {
  return parent.type == AddresTypeEnum.BUSINESS
    ? AddresTypeEnum.BUSINESS
    : parent.type == AddresTypeEnum.PERSONAL
    ? AddresTypeEnum.PERSONAL
    : null;
};
export const getLineOne = (parent: AddressType) => {
  return parent.lineOne ?? null;
};
export const getLineTwo = (parent: AddressType) => {
  return parent.lineTwo ?? null;
};
export const getCity = (parent: AddressType) => {
  return parent.city ?? null;
};
export const getState = (parent: AddressType) => {
  return parent.state ?? null;
};
export const getZipCode = (parent: AddressType) => {
  return parent.zipCode ?? null;
};
export const getCreatedAt = (parent: AddressType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getUpdatedAt = (parent: AddressType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Address: Resolvers["Address"] = {
  __resolveReference: async (obj) => {
    return await db.client.address.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  type: getType,
  lineOne: getLineOne,
  lineTwo: getLineTwo,
  city: getCity,
  state: getState,
  zipCode: getZipCode,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
