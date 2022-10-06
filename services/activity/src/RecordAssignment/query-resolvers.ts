import { db } from "../db";
import {
  QueryResolvers,
  QueryRecordAssignmentArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getRecordAssignments = async () => {
  return await db.client.recordAssignment.findMany();
};

export const recordAssignments: QueryResolvers["recordAssignments"] =
  async () => {
    return await getRecordAssignments();
  };

export const getRecordAssignment = async (args: QueryRecordAssignmentArgs) => {
  const { id } = idArgs(args);
  return await db.client.recordAssignment.findFirst({
    where: {
      id,
    },
  });
};

export const recordAssignment: QueryResolvers["recordAssignment"] = async (
  _,
  args: QueryRecordAssignmentArgs
) => {
  return await getRecordAssignment(args);
};
