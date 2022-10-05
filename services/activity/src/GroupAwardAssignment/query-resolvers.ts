import { db } from "../db";
import {
  QueryResolvers,
  QueryGroupAwardAssignmentArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getGroupAwardAssignments = async () => {
  return await db.client.groupAwardAssignment.findMany();
};

export const groupAwardAssignments: QueryResolvers["groupAwardAssignments"] =
  async () => {
    return await getGroupAwardAssignments();
  };

export const getGroupAwardAssignment = async (
  args: QueryGroupAwardAssignmentArgs
) => {
  const { id } = idArgs(args);
  return await db.client.groupAwardAssignment.findFirst({
    where: {
      id,
    },
  });
};

export const groupAwardAssignment: QueryResolvers["groupAwardAssignment"] =
  async (_, args: QueryGroupAwardAssignmentArgs) => {
    return await getGroupAwardAssignment(args);
  };
