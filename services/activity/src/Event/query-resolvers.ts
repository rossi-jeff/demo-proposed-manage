import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryEventArgs } from "../../generated/graphql";
import { db } from "../db";

export const getEvents = async () => {
  return await db.client.event.findMany();
};

export const events: QueryResolvers["events"] = async () => {
  return await getEvents();
};

export const getEvent = async (args: QueryEventArgs) => {
  const { id } = idArgs(args);
  return await db.client.event.findFirst({
    where: {
      id,
    },
  });
};

export const event: QueryResolvers["event"] = async (
  _,
  args: QueryEventArgs
) => {
  return await getEvent(args);
};
