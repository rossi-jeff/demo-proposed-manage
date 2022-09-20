import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { PersonType } from "./types";

export const getUserName = (parent: PersonType) => {
  return parent.userName ?? null;
};
export const getPassWord = (parent: PersonType) => {
  return parent.passWord ?? null;
};
export const getSchoolId = (parent: PersonType) => {
  return parent.schoolId ?? null;
};
export const getAllowedToLogin = (parent: PersonType) => {
  return parent.allowedToLogin ?? false;
};
export const getFirstName = (parent: PersonType) => {
  return parent.firstName ?? null;
};
export const getLastName = (parent: PersonType) => {
  return parent.lastName ?? null;
};

export const Person: Resolvers["Person"] = {
  __resolveReference: async (obj) => {
    return await db.client.person.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  userName: getUserName,
  passWord: getPassWord,
  schoolId: getSchoolId,
  allowedToLogin: getAllowedToLogin,
  firstName: getFirstName,
  lastName: getLastName,
  sex: (parent: PersonType) => {
    return parent.sex ?? null;
  },
  birthDate: (parent: PersonType) => {
    return parent.birthDate?.toString() ?? null;
  },
  highSchoolGraduationYear: (parent: PersonType) => {
    return parent.highSchoolGraduationYear ?? null;
  },
  insuranceCompany: (parent: PersonType) => {
    return parent.insuranceCompany ?? null;
  },
  insuranceAccountNumber: (parent: PersonType) => {
    return parent.insuranceAccountNumber ?? null;
  },
  physicianName: (parent: PersonType) => {
    return parent.physicianName ?? null;
  },
  physicianPhone: (parent: PersonType) => {
    return parent.physicianPhone ?? null;
  },
  studentId: (parent: PersonType) => {
    return parent.studentId ?? null;
  },
  schoolTransferredFrom: (parent: PersonType) => {
    return parent.schoolTransferredFrom ?? null;
  },
  medicalInformation: (parent: PersonType) => {
    return parent.medicalInformation ?? null;
  },
  acceptsCOPPA: (parent: PersonType) => {
    return parent.acceptsCOPPA ?? false;
  },
  optsInToCommunications: (parent: PersonType) => {
    return parent.optsInToCommunications ?? false;
  },
  physicalDate: (parent: PersonType) => {
    return parent.physicalDate?.toString() ?? null;
  },
  credit: (parent: PersonType) => {
    return parent.credit ?? 0;
  },
  ethnicity: (parent: PersonType) => {
    return parent.ethnicity ?? null;
  },
  firstEnrollmentDate: (parent: PersonType) => {
    return parent.firstEnrollmentDate?.toString() ?? null;
  },
  participationStatus: (parent: PersonType) => {
    return parent.participationStatus ?? null;
  },
  gpa: (parent: PersonType) => {
    return parent.gpa ?? null;
  },
  felonyInfo: (parent: PersonType) => {
    return parent.felonyInfo ?? 0;
  },
  notifications: (parent: PersonType) => {
    return parent.notifications ?? null;
  },
  concussionTestDate: (parent: PersonType) => {
    return parent.concussionTestDate?.toString() ?? null;
  },
  adData: (parent: PersonType) => {
    return parent.adData ?? null;
  },
  createdAt: (parent: PersonType) => {
    return parent.createdAt.toString() ?? null;
  },
  updatedAt: (parent: PersonType) => {
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
