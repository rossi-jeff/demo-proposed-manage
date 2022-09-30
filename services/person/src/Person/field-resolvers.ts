import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  Affiliations: async (parent) => {
    return await db.client.affiliation.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  AlergicConditions: async (parent) => {
    return await db.client.alergicCondition.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  EmergencyContacts: async (parent) => {
    return await db.client.emergencyContact.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  Invoices: async (parent) => {
    return await db.client.invoice.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  MedicalConditions: async (parent) => {
    return await db.client.medicalCondition.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
};
