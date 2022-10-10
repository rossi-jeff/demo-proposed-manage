import { db } from "../db";
import { QueryResolvers, QueryRelationshipArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getRelationships = async () => {
  return await db.client.relationship.findMany();
};

export const relationships: QueryResolvers["relationships"] = async () => {
  return await getRelationships();
};

export const getRelationship = async (args: QueryRelationshipArgs) => {
  const { id } = idArgs(args);
  return await db.client.relationship.findFirst({
    where: {
      id,
    },
  });
};

export const relationship: QueryResolvers["relationship"] = async (
  _,
  args: QueryRelationshipArgs
) => {
  return await getRelationship(args);
};
