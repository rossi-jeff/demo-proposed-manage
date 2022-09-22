import { QueryResolvers, QueryPersonArgs } from "../../generated/graphql";
import { db } from "../db";
import { idArgs } from "../../../../utils/id-args";

export const getPeople = async () => {
  return await db.client.person.findMany();
};

export const people: QueryResolvers["people"] = async () => {
  return await getPeople();
};

export const getPerson = async (args: QueryPersonArgs) => {
  const { id } = idArgs(args);
  return await db.client.person.findFirst({
    where: {
      id,
    },
  });
};

export const person: QueryResolvers["person"] = async (
  _,
  args: QueryPersonArgs
) => {
  return await getPerson(args);
};
