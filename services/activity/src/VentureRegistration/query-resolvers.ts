import { db } from "../db";
import {
  QueryResolvers,
  QueryVentureRegistrationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getVentureRegistrations = async () => {
  return await db.client.ventureRegistration.findMany();
};

export const ventureRegistrations: QueryResolvers["ventureRegistrations"] =
  async () => {
    return await getVentureRegistrations();
  };

export const getVentureRegistration = async (
  args: QueryVentureRegistrationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.ventureRegistration.findFirst({
    where: {
      id,
    },
  });
};

export const ventureRegistration: QueryResolvers["ventureRegistration"] =
  async (_, args: QueryVentureRegistrationArgs) => {
    return await getVentureRegistration(args);
  };
