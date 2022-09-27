import { idArgs } from "../../../../utils/id-args";
import {
  QueryResolvers,
  QueryAlergicConditionArgs,
} from "../../generated/graphql";
import { db } from "../db";

export const getAlergicConditions = async () => {
  return await db.client.alergicCondition.findMany();
};

export const alergicConditions: QueryResolvers["alergicConditions"] =
  async () => {
    return await getAlergicConditions();
  };

export const getAlergicCondition = async (args: QueryAlergicConditionArgs) => {
  const { id } = idArgs(args);
  return await db.client.alergicCondition.findFirst({
    where: {
      id,
    },
  });
};

export const alergicCondition: QueryResolvers["alergicCondition"] = async (
  _,
  args: QueryAlergicConditionArgs
) => {
  return await getAlergicCondition(args);
};
