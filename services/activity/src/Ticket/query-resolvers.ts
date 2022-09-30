import { db } from "../db";
import { QueryResolvers, QueryTicketArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getTickets = async () => {
  return await db.client.ticket.findMany();
};

export const tickets: QueryResolvers["tickets"] = async () => {
  return await getTickets();
};

export const getTicket = async (args: QueryTicketArgs) => {
  const { id } = idArgs(args);
  return await db.client.ticket.findFirst({
    where: {
      id,
    },
  });
};

export const ticket: QueryResolvers["ticket"] = async (
  _,
  args: QueryTicketArgs
) => {
  return await getTicket(args);
};
