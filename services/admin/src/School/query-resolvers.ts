import { QueryResolvers, QuerySchoolArgs } from "../../generated/graphql";
import { db } from "../db";

export const schools: QueryResolvers["schools"] = async () => {
  return await db.client.school.findMany();
};

export const school: QueryResolvers["school"] = async (
  _,
  args: QuerySchoolArgs
) => {
  const { id } = args;
  return await db.client.school.findFirst({
    where: {
      id,
    },
  });
};
