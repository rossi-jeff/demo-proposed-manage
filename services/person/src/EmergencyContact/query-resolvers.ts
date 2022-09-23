import { idArgs } from "../../../../utils/id-args";
import {
  QueryResolvers,
  QueryEmergencyContactArgs,
} from "../../generated/graphql";
import { db } from "../db";

export const getEmergencyContacts = async () => {
  return await db.client.emergencyContact.findMany();
};

export const emergencyContacts: QueryResolvers["emergencyContacts"] =
  async () => {
    return await getEmergencyContacts();
  };

export const getEmergencyContact = async (args: QueryEmergencyContactArgs) => {
  const { id } = idArgs(args);
  return await db.client.emergencyContact.findFirst({
    where: {
      id,
    },
  });
};

export const emergencyContact: QueryResolvers["emergencyContact"] = async (
  _,
  args: QueryEmergencyContactArgs
) => {
  return await getEmergencyContact(args);
};
