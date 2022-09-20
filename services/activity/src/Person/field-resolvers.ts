import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Person: Resolvers["Person"] = {
  __resolveReference: async (obj) => {
    return await db.client.person.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  userName: (parent) => {
    return parent.userName ?? null;
  },
  passWord: (parent) => {
    return parent.passWord ?? null;
  },
  schoolId: (parent) => {
    return parent.schoolId ?? null;
  },
  allowedToLogin: (parent) => {
    return parent.allowedToLogin ?? false;
  },
  firstName: (parent) => {
    return parent.firstName ?? null;
  },
  lastName: (parent) => {
    return parent.lastName ?? null;
  },
  sex: (parent) => {
    return parent.sex ?? null;
  },
  birthDate: (parent) => {
    return parent.birthDate?.toString() ?? null;
  },
  highSchoolGraduationYear: (parent) => {
    return parent.highSchoolGraduationYear ?? null;
  },
  insuranceCompany: (parent) => {
    return parent.insuranceCompany ?? null;
  },
  insuranceAccountNumber: (parent) => {
    return parent.insuranceAccountNumber ?? null;
  },
  physicianName: (parent) => {
    return parent.physicianName ?? null;
  },
  physicianPhone: (parent) => {
    return parent.physicianPhone ?? null;
  },
  studentId: (parent) => {
    return parent.studentId ?? null;
  },
  schoolTransferredFrom: (parent) => {
    return parent.schoolTransferredFrom ?? null;
  },
  medicalInformation: (parent) => {
    return parent.medicalInformation ?? null;
  },
  acceptsCOPPA: (parent) => {
    return parent.acceptsCOPPA ?? false;
  },
  optsInToCommunications: (parent) => {
    return parent.optsInToCommunications ?? false;
  },
  physicalDate: (parent) => {
    return parent.physicalDate?.toString() ?? null;
  },
  credit: (parent) => {
    return parent.credit ?? 0;
  },
  ethnicity: (parent) => {
    return parent.ethnicity ?? null;
  },
  firstEnrollmentDate: (parent) => {
    return parent.firstEnrollmentDate?.toString() ?? null;
  },
  participationStatus: (parent) => {
    return parent.participationStatus ?? null;
  },
  gpa: (parent) => {
    return parent.gpa ?? null;
  },
  felonyInfo: (parent) => {
    return parent.felonyInfo ?? 0;
  },
  notifications: (parent) => {
    return parent.notifications ?? null;
  },
  concussionTestDate: (parent) => {
    return parent.concussionTestDate?.toString() ?? null;
  },
  adData: (parent) => {
    return parent.adData ?? null;
  },
  createdAt: (parent) => {
    return parent.createdAt.toString() ?? null;
  },
  updatedAt: (parent) => {
    return parent.updatedAt.toString() ?? null;
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
