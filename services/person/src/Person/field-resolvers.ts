import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  Addresses: async (parent) => {
    const personAdresses = await db.client.personAddress.findMany({
      where: {
        personId: parent.id,
      },
    });
    return personAdresses.map((p) => {
      return { __typename: "Address", id: p.addressId };
    });
  },
  Emails: async (parent) => {
    const personEmails = await db.client.personEmail.findMany({
      where: {
        personId: parent.id,
      },
    });
    return personEmails.map((p) => {
      return { __typename: "Email", id: p.emailId };
    });
  },
  EmergencyContacts: async (parent) => {
    return await db.client.emergencyContact.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  Phones: async (parent) => {
    const personPhones = await db.client.personPhone.findMany({
      where: {
        personId: parent.id,
      },
    });
    return personPhones.map((p) => {
      return { __typename: "Phone", id: p.phoneId };
    });
  },
};
