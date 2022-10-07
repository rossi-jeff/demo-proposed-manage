import { db } from "../db";
import { QueryResolvers, QueryOccuranceArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getOccurances = async () => {
  return await db.client.occurance.findMany();
};

export const occurances: QueryResolvers["occurances"] = async () => {
  return await getOccurances();
};

export const getOccurance = async (args: QueryOccuranceArgs) => {
  const { id } = idArgs(args);
  return await db.client.occurance.findFirst({
    where: {
      id,
    },
  });
};

export const occurance: QueryResolvers["occurance"] = async (
  _,
  args: QueryOccuranceArgs
) => {
  return await getOccurance(args);
};
