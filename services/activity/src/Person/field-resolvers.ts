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
export const getSex = (parent: PersonType) => {
  return parent.sex ?? null;
};
export const getBirthDate = (parent: PersonType) => {
  return parent.birthDate?.toString() ?? null;
};
export const getHighSchoolGraduationYear = (parent: PersonType) => {
  return parent.highSchoolGraduationYear ?? null;
};
export const getInsuranceCompany = (parent: PersonType) => {
  return parent.insuranceCompany ?? null;
};
export const getInsuranceAccountNumber = (parent: PersonType) => {
  return parent.insuranceAccountNumber ?? null;
};
export const getPhysicianName = (parent: PersonType) => {
  return parent.physicianName ?? null;
};
export const getPhysicianPhone = (parent: PersonType) => {
  return parent.physicianPhone ?? null;
};
export const getStudentId = (parent: PersonType) => {
  return parent.studentId ?? null;
};
export const getSchoolTransferredFrom = (parent: PersonType) => {
  return parent.schoolTransferredFrom ?? null;
};
export const getMedicalInformation = (parent: PersonType) => {
  return parent.medicalInformation ?? null;
};
export const getAcceptsCOPPA = (parent: PersonType) => {
  return parent.acceptsCOPPA ?? false;
};
export const getOptsInToCommunications = (parent: PersonType) => {
  return parent.optsInToCommunications ?? false;
};
export const getPhysicalDate = (parent: PersonType) => {
  return parent.physicalDate?.toString() ?? null;
};
export const getCredit = (parent: PersonType) => {
  return parent.credit ?? 0;
};
export const getEthnicity = (parent: PersonType) => {
  return parent.ethnicity ?? null;
};
export const getFirstEnrollmentDate = (parent: PersonType) => {
  return parent.firstEnrollmentDate?.toString() ?? null;
};
export const getParticipationStatus = (parent: PersonType) => {
  return parent.participationStatus ?? null;
};
export const getGpa = (parent: PersonType) => {
  return parent.gpa ?? null;
};
export const getFelonyInfo = (parent: PersonType) => {
  return parent.felonyInfo ?? 0;
};
export const getNotifications = (parent: PersonType) => {
  return parent.notifications ?? null;
};
export const getConcussionTestDate = (parent: PersonType) => {
  return parent.concussionTestDate?.toString() ?? null;
};
export const getAdData = (parent: PersonType) => {
  return parent.adData ?? null;
};
export const getCreatedAt = (parent: PersonType) => {
  return parent.createdAt.toString() ?? null;
};
export const getUpdatedAt = (parent: PersonType) => {
  return parent.updatedAt.toString() ?? null;
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
  sex: getSex,
  birthDate: getBirthDate,
  highSchoolGraduationYear: getHighSchoolGraduationYear,
  insuranceCompany: getInsuranceCompany,
  insuranceAccountNumber: getInsuranceAccountNumber,
  physicianName: getPhysicianName,
  physicianPhone: getPhysicianPhone,
  studentId: getStudentId,
  schoolTransferredFrom: getSchoolTransferredFrom,
  medicalInformation: getMedicalInformation,
  acceptsCOPPA: getAcceptsCOPPA,
  optsInToCommunications: getOptsInToCommunications,
  physicalDate: getPhysicalDate,
  credit: getCredit,
  ethnicity: getEthnicity,
  firstEnrollmentDate: getFirstEnrollmentDate,
  participationStatus: getParticipationStatus,
  gpa: getGpa,
  felonyInfo: getFelonyInfo,
  notifications: getNotifications,
  concussionTestDate: getConcussionTestDate,
  adData: getAdData,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: async (ref: PersonType) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
  Addresses: async (ref: PersonType) => {
    const personAddresses = await db.client.personAddress.findMany({
      where: {
        personId: ref.id,
      },
    });
    return personAddresses.map((p) => {
      return { __typename: "Address", id: p.addressId };
    });
  },
  Emails: async (ref: PersonType) => {
    const personEmails = await db.client.personEmail.findMany({
      where: {
        personId: ref.id,
      },
    });
    return personEmails.map((p) => {
      return { __typename: "Email", id: p.emailId };
    });
  },
};
