import { QueryResolvers, QueryEmailArgs } from "../../generated/graphql";
import { db } from "../db";

export const getEmails = async () => {
  return await db.client.email.findMany();
};

export const emails: QueryResolvers["emails"] = async () => {
  return await getEmails();
};

export const getEmail = async (args: QueryEmailArgs) => {
  const { id } = args;
  return await db.client.email.findFirst({
    where: {
      id,
    },
  });
};

export const email: QueryResolvers["email"] = async (
  _,
  args: QueryEmailArgs
) => {
  return await getEmail(args);
};
