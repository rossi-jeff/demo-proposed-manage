import { db } from "../db";
import { QueryResolvers, QueryRoleArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getRoles = async () => {
  return await db.client.role.findMany();
};

export const roles: QueryResolvers["roles"] = async () => {
  return await getRoles();
};

export const getRole = async (args: QueryRoleArgs) => {
  const { id } = idArgs(args);
  return await db.client.role.findFirst({
    where: {
      id,
    },
  });
};

export const role: QueryResolvers["role"] = async (_, args: QueryRoleArgs) => {
  return await getRole(args);
};
