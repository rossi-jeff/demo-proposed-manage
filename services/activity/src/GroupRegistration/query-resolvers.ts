import { db } from "../db";
import {
  QueryResolvers,
  QueryGroupRegistrationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getGroupRegistrations = async () => {
  return await db.client.groupRegistration.findMany();
};

export const groupRegistrations: QueryResolvers["groupRegistrations"] =
  async () => {
    return await getGroupRegistrations();
  };

export const getGroupRegistration = async (
  args: QueryGroupRegistrationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.groupRegistration.findFirst({
    where: {
      id,
    },
  });
};

export const groupRegistration: QueryResolvers["groupRegistration"] = async (
  _,
  args: QueryGroupRegistrationArgs
) => {
  return await getGroupRegistration(args);
};
