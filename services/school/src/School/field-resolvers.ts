import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const School: Resolvers["School"] = {
  Activities: async (parent) => {
    return await db.client.activity.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Addresses: async (parent) => {
    const schoolAddresses = await db.client.schoolAddress.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Address: true,
      },
    });
    return schoolAddresses.map((s) => s.Address);
  },
  Awards: async (parent) => {
    return await db.client.award.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Colors: async (parent) => {
    return await db.client.color.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Emails: async (parent) => {
    const schoolEmails = await db.client.schoolEmail.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Email: true,
      },
    });
    return schoolEmails.map((s) => s.Email);
  },
  LegalForms: async (parent) => {
    return await db.client.legalForm.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  MedicalForms: async (parent) => {
    return await db.client.medicalForm.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  People: async (parent) => {
    return await db.client.person.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Fees: async (parent) => {
    const schoolFees = await db.client.schoolFee.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Fee: true,
      },
    });
    return schoolFees.map((s) => s.Fee);
  },
  PaymentCodes: async (parent) => {
    return await db.client.paymentCode.findMany({
      where: {
        schoolId: parent.id,
      },
    });
  },
  Phones: async (parent) => {
    const schollPhones = await db.client.schoolPhone.findMany({
      where: {
        schoolId: parent.id,
      },
      include: {
        Phone: true,
      },
    });
    return schollPhones.map((s) => s.Phone);
  },
};
