import { db } from "../db";
import { QueryResolvers, QueryMessageArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getMessages = async () => {
  return await db.client.message.findMany();
};

export const messages: QueryResolvers["messages"] = async () => {
  return await getMessages();
};

export const getMessage = async (args: QueryMessageArgs) => {
  const { id } = idArgs(args);
  return await db.client.message.findFirst({
    where: {
      id,
    },
  });
};

export const message: QueryResolvers["message"] = async (
  _,
  args: QueryMessageArgs
) => {
  return await getMessage(args);
};
