import {
  MutationResolvers,
  MutationSchoolCreateArgs,
  SchoolCreateInput,
  SchoolInput,
} from "../../generated/graphql";
import { Prisma } from "../../generated/admin-db";
import { db } from "../db";
import { MutationSchoolUpdateArgs } from "../../generated/graphql";
import { createArgs, updateArgs } from "../../../../utils";

export const createSchool = async (input: SchoolCreateInput) => {
  const now = new Date();
  const data: Prisma.SchoolCreateInput = {
    createdAt: now,
    updatedAt: now,
    ...input,
  };
  return await db.client.school.create({ data });
};

export const schoolCreate: MutationResolvers["schoolCreate"] = async (
  _,
  args: MutationSchoolCreateArgs
) => {
  const { input } = createArgs(args);
  return await createSchool(input);
};

export const updateSchool = async (id: string, updates: SchoolInput) => {
  const now = new Date();
  const data: Prisma.SchoolUpdateInput = {
    updatedAt: now,
    ...updates,
    name: updates?.name ?? undefined,
    subDomain: updates?.subDomain ?? undefined,
  };
  return await db.client.school.update({
    where: { id },
    data,
  });
};

export const schoolUpdate: MutationResolvers["schoolUpdate"] = async (
  _,
  args: MutationSchoolUpdateArgs
) => {
  const { id, updates } = updateArgs(args);
  return await updateSchool(id, updates);
};
