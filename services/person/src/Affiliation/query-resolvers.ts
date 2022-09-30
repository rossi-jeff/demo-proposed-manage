import { db } from "../db";
import { QueryResolvers, QueryAffiliationArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getAffiliations = async () => {
  return await db.client.affiliation.findMany();
};

export const affiliations: QueryResolvers["affiliations"] = async () => {
  return await getAffiliations();
};

export const getAffiliation = async (args: QueryAffiliationArgs) => {
  const { id } = idArgs(args);
  return await db.client.affiliation.findFirst({
    where: {
      id,
    },
  });
};

export const affiliation: QueryResolvers["affiliation"] = async (
  _,
  args: QueryAffiliationArgs
) => {
  return await getAffiliation(args);
};
