import { idArgs } from "../../../../utils/id-args";
import { QueryResolvers, QueryColorArgs } from "../../generated/graphql";
import { db } from "../db";

export const getColors = async () => {
  return await db.client.color.findMany();
};

export const colors: QueryResolvers["colors"] = async () => {
  return await getColors();
};

export const getColor = async (args: QueryColorArgs) => {
  const { id } = idArgs(args);
  return await db.client.color.findFirst({
    where: {
      id,
    },
  });
};

export const color: QueryResolvers["color"] = async (
  _,
  args: QueryColorArgs
) => {
  return await getColor(args);
};
