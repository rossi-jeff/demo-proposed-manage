import { db } from "../db";
import {
  QueryResolvers,
  QuerySupportDocumentArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getSupportDocuments = async () => {
  return await db.client.supportDocument.findMany();
};

export const supportDocuments: QueryResolvers["supportDocuments"] =
  async () => {
    return await getSupportDocuments();
  };

export const getSupportDocument = async (args: QuerySupportDocumentArgs) => {
  const { id } = idArgs(args);
  return await db.client.supportDocument.findFirst({
    where: {
      id,
    },
  });
};

export const supportDocument: QueryResolvers["supportDocument"] = async (
  _,
  args: QuerySupportDocumentArgs
) => {
  return await getSupportDocument(args);
};
