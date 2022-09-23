import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  Addresses: async (parent) => {
    const personAddresses = await db.client.personAddress.findMany({
      where: {
        personId: parent.id,
      },
      include: {
        Address: true,
      },
    });
    return personAddresses.map((p) => p.Address);
  },
  Emails: async (parent) => {
    const personEmails = await db.client.personEmail.findMany({
      where: {
        personId: parent.id,
      },
      include: {
        Email: true,
      },
    });
    return personEmails.map((p) => p.Email);
  },
  Phones: async (parent) => {
    const personPhones = await db.client.personPhone.findMany({
      where: {
        personId: parent.id,
      },
      include: {
        Phone: true,
      },
    });
    return personPhones.map((p) => p.Phone);
  },
};
