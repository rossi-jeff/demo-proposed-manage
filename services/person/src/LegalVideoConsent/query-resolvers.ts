import { db } from "../db";
import {
  QueryResolvers,
  QueryLegalVideoConsentArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getLegalVideoConsents = async () => {
  return await db.client.legalVideoConsent.findMany();
};

export const legalVideoConsents: QueryResolvers["legalVideoConsents"] =
  async () => {
    return await getLegalVideoConsents();
  };

export const getLegalVideoConsent = async (
  args: QueryLegalVideoConsentArgs
) => {
  const { id } = idArgs(args);
  return await db.client.legalVideoConsent.findFirst({
    where: {
      id,
    },
  });
};

export const legalVideoConsent: QueryResolvers["legalVideoConsent"] = async (
  _,
  args: QueryLegalVideoConsentArgs
) => {
  return await getLegalVideoConsent(args);
};
