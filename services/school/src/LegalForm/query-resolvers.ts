import { QueryResolvers, QueryLegalFormArgs } from "../../generated/graphql";
import { db } from "../db";
import { idArgs } from "../../../../utils/id-args";

export const getLegalForms = async () => {
  return await db.client.legalForm.findMany();
};

export const legalForms: QueryResolvers["legalForms"] = async () => {
  return await getLegalForms();
};

export const getLegalForm = async (args: QueryLegalFormArgs) => {
  const { id } = idArgs(args);
  return await db.client.legalForm.findFirst({
    where: {
      id,
    },
  });
};

export const legalForm: QueryResolvers["legalForm"] = async (
  _,
  args: QueryLegalFormArgs
) => {
  return await getLegalForm(args);
};
