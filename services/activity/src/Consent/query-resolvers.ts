import { db } from "../db";
import { QueryResolvers, QueryConsentArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getConsents = async () => {
  return await db.client.consent.findMany();
};

export const consents: QueryResolvers["consents"] = async () => {
  return await getConsents();
};

export const getConsent = async (args: QueryConsentArgs) => {
  const { id } = idArgs(args);
  return await db.client.consent.findFirst({
    where: {
      id,
    },
  });
};

export const consent: QueryResolvers["consent"] = async (
  _,
  args: QueryConsentArgs
) => {
  return await getConsent(args);
};
