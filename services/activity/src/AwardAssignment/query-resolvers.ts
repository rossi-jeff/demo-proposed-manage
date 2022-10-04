import { db } from "../db";
import {
  QueryResolvers,
  QueryAwardAssignmentArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getAwardAssignments = async () => {
  return await db.client.awardAssignment.findMany();
};

export const awardAssignments: QueryResolvers["awardAssignments"] =
  async () => {
    return await getAwardAssignments();
  };

export const getAwardAssignment = async (args: QueryAwardAssignmentArgs) => {
  const { id } = idArgs(args);
  return await db.client.awardAssignment.findFirst({
    where: {
      id,
    },
  });
};

export const awardAssignment: QueryResolvers["awardAssignment"] = async (
  _,
  args: QueryAwardAssignmentArgs
) => {
  return await getAwardAssignment(args);
};
