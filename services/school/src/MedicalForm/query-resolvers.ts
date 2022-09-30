import { db } from "../db";
import { QueryResolvers, QueryMedicalFormArgs } from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getMedicalForms = async () => {
  return await db.client.medicalForm.findMany();
};

export const medicalForms: QueryResolvers["medicalForms"] = async () => {
  return await getMedicalForms();
};

export const getMedicalForm = async (args: QueryMedicalFormArgs) => {
  const { id } = idArgs(args);
  return await db.client.medicalForm.findFirst({
    where: {
      id,
    },
  });
};

export const medicalForm: QueryResolvers["medicalForm"] = async (
  _,
  args: QueryMedicalFormArgs
) => {
  return await getMedicalForm(args);
};
