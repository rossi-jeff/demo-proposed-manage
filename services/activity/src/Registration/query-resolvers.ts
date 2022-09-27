import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryRegistrationArgs } from "../../generated/graphql";
import { db } from "../db";

export const getRegistrations = async () => {
  return await db.client.registration.findMany();
};

export const registrations: QueryResolvers["registrations"] = async () => {
  return await getRegistrations();
};

export const getRegistration = async (args: QueryRegistrationArgs) => {
  const { id } = idArgs(args);
  return await db.client.registration.findFirst({
    where: {
      id,
    },
  });
};

export const registration: QueryResolvers["registration"] = async (
  _,
  args: QueryRegistrationArgs
) => {
  return await getRegistration(args);
};
