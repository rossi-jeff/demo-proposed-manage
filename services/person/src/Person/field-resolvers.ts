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
  CustomAnswers: async (parent) => {
    return await db.client.customAnswer.findMany({
      where: {
        personId: parent.id,
      },
    });
  },
  DirectingRoles: async (parent) => {
    return await db.client.directingRole.findMany({
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
  ReceivedMessages: async (parent) => {
    const messagePeople = await db.client.messagePerson.findMany({
      where: {
        personId: parent.id,
      },
    });
    return messagePeople.map((m) => {
      return { __typename: "Message", id: m.messageId };
    });
  },
};
