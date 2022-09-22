import { QueryResolvers, QueryPhoneArgs } from "../../generated/graphql";
import { db } from "../db";
import { idArgs } from "../../../../utils/id-args";

export const getPhones = async () => {
  return await db.client.phone.findMany();
};

export const phones: QueryResolvers["phones"] = async () => {
  return await getPhones();
};

export const getPhone = async (args: QueryPhoneArgs) => {
  const { id } = idArgs(args);
  return await db.client.phone.findFirst({
    where: {
      id,
    },
  });
};

export const phone: QueryResolvers["phone"] = async (
  _,
  args: QueryPhoneArgs
) => {
  return await getPhone(args);
};
