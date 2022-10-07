import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { VentureType } from "./types";

export const getActivityId = (parent: VentureType) => {
  return parent.activityId ?? null;
};
export const getBasePrice = (parent: VentureType) => {
  return parent.basePrice ?? null;
};
export const getCancelled = (parent: VentureType) => {
  return parent.cancelled ?? null;
};
export const getCreatedAt = (parent: VentureType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDescription = (parent: VentureType) => {
  return parent.description ?? null;
};
export const getDirector = (parent: VentureType) => {
  return parent.director ?? null;
};
export const getDirectorBio = (parent: VentureType) => {
  return parent.directorBio ?? null;
};
export const getGender = (parent: VentureType) => {
  return parent.gender ?? null;
};
export const getGrade = (parent: VentureType) => {
  return parent.grade ?? null;
};
export const getLocation = (parent: VentureType) => {
  return parent.location ?? null;
};
export const getMaxNumberOfParticipants = (parent: VentureType) => {
  return parent.maxNumberOfParticipants ?? null;
};
export const getName = (parent: VentureType) => {
  return parent.name ?? null;
};
export const getNonDistrictBasePrice = (parent: VentureType) => {
  return parent.nonDistrictBasePrice ?? null;
};
export const getRegisterable = (parent: VentureType) => {
  return parent.registerable ?? null;
};
export const getRegistrationEnd = (parent: VentureType) => {
  return parent.registrationEnd?.toString() ?? null;
};
export const getRegistrationStart = (parent: VentureType) => {
  return parent.registrationStart?.toString() ?? null;
};
export const getSeason = (parent: VentureType) => {
  return parent.season ?? null;
};
export const getSourceVentureId = (parent: VentureType) => {
  return parent.sourceVentureId ?? null;
};
export const getState = (parent: VentureType) => {
  return parent.state ?? null;
};
export const getType = (parent: VentureType) => {
  return parent.type ?? null;
};
export const getUpdatedAt = (parent: VentureType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Venture: Resolvers["Venture"] = {
  __resolveReference: async (obj) => {
    return await db.client.venture.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  activityId: getActivityId,
  name: getName,
  description: getDescription,
  type: getType,
  gender: getGender,
  grade: getGrade,
  basePrice: getBasePrice,
  nonDistrictBasePrice: getNonDistrictBasePrice,
  registrationStart: getRegistrationStart,
  registrationEnd: getRegistrationEnd,
  director: getDirector,
  directorBio: getDirectorBio,
  registerable: getRegisterable,
  maxNumberOfParticipants: getMaxNumberOfParticipants,
  location: getLocation,
  cancelled: getCancelled,
  state: getState,
  season: getSeason,
  sourceVentureId: getSourceVentureId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    if (ref.activityId === null) return null;
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  LineItems: async (parent) => {
    return await db.client.lineItem.findMany({
      where: {
        ventureId: parent.id,
      },
    });
  },
  Messages: async (parent) => {
    return await db.client.message.findMany({
      where: {
        ventureId: parent.id,
      },
    });
  },
};
