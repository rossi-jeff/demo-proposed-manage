import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { ActivityType } from "./types";

export const getSchoolId = (parent: ActivityType) => {
  return parent.schoolId ?? null;
};
export const getRegisterable = (parent: ActivityType) => {
  return parent.registerable ?? null;
};
export const getActive = (parent: ActivityType) => {
  return parent.active ?? null;
};
export const getArchived = (parent: ActivityType) => {
  return parent.archived ?? null;
};
export const getSteps = (parent: ActivityType) => {
  return parent.steps ?? null;
};
export const getEmailFooter = (parent: ActivityType) => {
  return parent.emailFooter ?? null;
};
export const getTermsAndConditions = (parent: ActivityType) => {
  return parent.termsAndConditions ?? null;
};
export const getKind = (parent: ActivityType) => {
  return parent.kind ?? null;
};
export const getLeadInMessage = (parent: ActivityType) => {
  return parent.leadInMessage ?? null;
};
export const getNoCut = (parent: ActivityType) => {
  return parent.noCut ?? null;
};
export const getCurrentSeason = (parent: ActivityType) => {
  return parent.currentSeason ?? null;
};
export const getAthleticSeason = (parent: ActivityType) => {
  return parent.athleticSeason ?? null;
};
export const getCreatedAt = (parent: ActivityType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getUpdatedAt = (parent: ActivityType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Activity: Resolvers["Activity"] = {
  __resolveReference: async (obj) => {
    return await db.client.activity.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  schoolId: getSchoolId,
  registerable: getRegisterable,
  active: getActive,
  archived: getArchived,
  steps: getSteps,
  emailFooter: getEmailFooter,
  termsAndConditions: getTermsAndConditions,
  kind: getKind,
  leadInMessage: getLeadInMessage,
  noCut: getNoCut,
  currentSeason: getCurrentSeason,
  athleticSeason: getAthleticSeason,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  School: (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
  Fees: async (parent) => {
    const activityFees = await db.client.activityFee.findMany({
      where: {
        activityId: parent.id,
      },
      include: {
        Fee: true,
      },
    });
    return activityFees.map((a) => a.Fee);
  },
};
