import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RoleType } from "./types";

export const getCreatedAt = (parent: RoleType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getIsAdmin = (parent: RoleType) => {
  return parent.isAdmin ?? null;
};
export const getName = (parent: RoleType) => {
  return parent.name ?? null;
};
export const getUpdatedAt = (parent: RoleType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Role: Resolvers["Role"] = {
  __resolveReference: async (ref) => {
    return await db.client.role.findFirst({
      where: {
        id: ref.id,
      },
    });
  },
  name: getName,
  isAdmin: getIsAdmin,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
