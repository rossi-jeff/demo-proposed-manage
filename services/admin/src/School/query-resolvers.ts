import { QueryResolvers, QuerySchoolArgs } from "../../generated/graphql";
import { db } from "../db";
import { idArgs } from "../../../../utils/id-args";

export const getSchools = async () => {
  return await db.client.school.findMany();
};

export const schools: QueryResolvers["schools"] = async () => {
  return await getSchools();
};

export const getSchool = async (args: QuerySchoolArgs) => {
  const { id } = idArgs(args);
  return await db.client.school.findFirst({
    where: {
      id,
    },
  });
};

export const school: QueryResolvers["school"] = async (
  _,
  args: QuerySchoolArgs
) => {
  return await getSchool(args);
};
