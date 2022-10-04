import { db } from "../db";
import {
  QueryResolvers,
  QueryDirectingRoleArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getDirectingRoles = async () => {
  return await db.client.directingRole.findMany();
};

export const directingRoles: QueryResolvers["directingRoles"] = async () => {
  return await getDirectingRoles();
};

export const getDirectingRole = async (args: QueryDirectingRoleArgs) => {
  const { id } = idArgs(args);
  return await db.client.directingRole.findFirst({
    where: {
      id,
    },
  });
};

export const directingRole: QueryResolvers["directingRole"] = async (
  _,
  args: QueryDirectingRoleArgs
) => {
  return await getDirectingRole(args);
};
