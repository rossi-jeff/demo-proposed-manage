import { db } from "../db";
import {
  QueryResolvers,
  QueryCoachCertificationArgs,
} from "../../generated/graphql";
import { idArgs } from "../../../../utils/id-args";

export const getCoachCertifications = async () => {
  return await db.client.coachCertification.findMany();
};

export const coachCertifications: QueryResolvers["coachCertifications"] =
  async () => {
    return await getCoachCertifications();
  };

export const getCoachCertification = async (
  args: QueryCoachCertificationArgs
) => {
  const { id } = idArgs(args);
  return await db.client.coachCertification.findFirst({
    where: {
      id,
    },
  });
};

export const coachCertification: QueryResolvers["coachCertification"] = async (
  _,
  args: QueryCoachCertificationArgs
) => {
  return await getCoachCertification(args);
};
