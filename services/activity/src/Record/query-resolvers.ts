import { db } from "../db";
import { QueryResolvers, QueryRecordArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getRecords = async () => {
  return await db.client.record.findMany();
};

export const records: QueryResolvers["records"] = async () => {
  return await getRecords();
};

export const getRecord = async (args: QueryRecordArgs) => {
  const { id } = idArgs(args);
  return await db.client.record.findFirst({
    where: {
      id,
    },
  });
};

export const record: QueryResolvers["record"] = async (
  _,
  args: QueryRecordArgs
) => {
  return await getRecord(args);
};
