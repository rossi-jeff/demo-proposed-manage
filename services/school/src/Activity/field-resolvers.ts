import { Resolvers } from "../../generated/graphql";
import { db } from "../db";

export const Activity: Resolvers["Activity"] = {
  __resolveReference: async (obj) => {
    return await db.client.activity.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  schoolId: (parent) => {
    return parent.schoolId ?? null;
  },
  registerable: (parent) => {
    return parent.registerable ?? false;
  },
  active: (parent) => {
    return parent.active ?? false;
  },
  archived: (parent) => {
    return parent.archived ?? false;
  },
  steps: (parent) => {
    return parent.steps ?? 0;
  },
  emailFooter: (parent) => {
    return parent.emailFooter ?? null;
  },
  termsAndConditions: (parent) => {
    return parent.termsAndConditions ?? null;
  },
  kind: (parent) => {
    return parent.kind ?? null;
  },
  leadInMessage: (parent) => {
    return parent.leadInMessage ?? null;
  },
  noCut: (parent) => {
    return parent.noCut ?? false;
  },
  currentSeason: (parent) => {
    return parent.currentSeason ?? null;
  },
  athleticSeason: (parent) => {
    return parent.athleticSeason ?? null;
  },
  createdAt: (parent) => {
    return parent.createdAt != null ? parent.createdAt.toString() : null;
  },
  updatedAt: (parent) => {
    return parent.updatedAt != null ? parent.updatedAt.toString() : null;
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
