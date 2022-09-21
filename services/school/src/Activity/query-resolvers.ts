import { QueryResolvers, QueryActivityArgs } from "../../generated/graphql";
import { db } from "../db";

export const getActivities = async () => {
  return await db.client.activity.findMany();
};

export const activities: QueryResolvers["activities"] = async () => {
  return await getActivities();
};

export const getActivity = async (args: QueryActivityArgs) => {
  const { id } = args;
  return await db.client.activity.findFirst({
    where: {
      id,
    },
  });
};

export const activity: QueryResolvers["activity"] = async (
  _,
  args: QueryActivityArgs
) => {
  return await getActivity(args);
};
