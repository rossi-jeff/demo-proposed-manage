import { db } from "../db";
import { QueryAddressArgs, QueryResolvers } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getAddressses = async () => {
  return await db.client.address.findMany();
};

export const addresses: QueryResolvers["addresses"] = async () => {
  return await getAddressses();
};

export const getAddress = async (args: QueryAddressArgs) => {
  const { id } = idArgs(args);
  return await db.client.address.findFirst({
    where: {
      id,
    },
  });
};

export const address: QueryResolvers["address"] = async (
  _,
  args: QueryAddressArgs
) => {
  return await getAddress(args);
};
