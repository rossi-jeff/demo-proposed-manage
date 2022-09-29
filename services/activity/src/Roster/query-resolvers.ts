import { db } from "../db";
import { QueryResolvers, QueryRosterArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getRosters = async () => {
  return await db.client.roster.findMany();
};

export const rosters: QueryResolvers["rosters"] = async () => {
  return await getRosters();
};

export const getRoster = async (args: QueryRosterArgs) => {
  const { id } = idArgs(args);
  return await db.client.roster.findFirst({
    where: {
      id,
    },
  });
};

export const roster: QueryResolvers["roster"] = async (
  _,
  args: QueryRosterArgs
) => {
  return await getRoster(args);
};
