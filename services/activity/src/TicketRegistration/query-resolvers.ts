import { db } from "../db";
import {
  QueryResolvers,
  QueryTicketRegistrationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getTicketRegistrations = async () => {
  return await db.client.ticketRegistration.findMany();
};

export const ticketRegistrations: QueryResolvers["ticketRegistrations"] =
  async () => {
    return await getTicketRegistrations();
  };

export const getTicketRegistration = async (
  args: QueryTicketRegistrationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.ticketRegistration.findFirst({
    where: {
      id,
    },
  });
};

export const ticketRegistration: QueryResolvers["ticketRegistration"] = async (
  _,
  args: QueryTicketRegistrationArgs
) => {
  return await getTicketRegistration(args);
};
