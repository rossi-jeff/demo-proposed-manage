import { db } from "../db";
import {
  QueryResolvers,
  QueryMedicalConditionArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getMedicalConditions = async () => {
  return await db.client.medicalCondition.findMany();
};

export const medicalConditions: QueryResolvers["medicalConditions"] =
  async () => {
    return await getMedicalConditions();
  };

export const getMedicalCondition = async (args: QueryMedicalConditionArgs) => {
  const { id } = idArgs(args);
  return await db.client.medicalCondition.findFirst({
    where: {
      id,
    },
  });
};

export const medicalCondition: QueryResolvers["medicalCondition"] = async (
  _,
  args: QueryMedicalConditionArgs
) => {
  return await getMedicalCondition(args);
};
