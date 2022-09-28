import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryInviteArgs } from "../../generated/graphql";
import { db } from "../db";

export const getInvites = async () => {
  return await db.client.invite.findMany();
};

export const invites: QueryResolvers["invites"] = async () => {
  return await getInvites();
};

export const getInvite = async (args: QueryInviteArgs) => {
  const { id } = idArgs(args);
  return await db.client.invite.findFirst({
    where: {
      id,
    },
  });
};

export const invite: QueryResolvers["invite"] = async (
  _,
  args: QueryInviteArgs
) => {
  return await getInvite(args);
};
