import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { RegistrationType } from "./types";

export const getActivityId = (parent: RegistrationType) => {
  return parent.activityId ?? null;
};
export const getComment = (parent: RegistrationType) => {
  return parent.comment ?? null;
};
export const getCreatedAt = (parent: RegistrationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEquipmentJacketSize = (parent: RegistrationType) => {
  return parent.equipmentJacketSize ?? null;
};
export const getEquipmentJerseySize = (parent: RegistrationType) => {
  return parent.equipmentJerseySize ?? null;
};
export const getEquipmentPantSize = (parent: RegistrationType) => {
  return parent.equipmentPantSize ?? null;
};
export const getEquipmentShoeSize = (parent: RegistrationType) => {
  return parent.equipmentShoeSize ?? null;
};
export const getGroupId = (parent: RegistrationType) => {
  return parent.groupId ?? null;
};
export const getHeight = (parent: RegistrationType) => {
  return parent.height ?? null;
};
export const getPaid = (parent: RegistrationType) => {
  return parent.paid ?? null;
};
export const getParticipantId = (parent: RegistrationType) => {
  return parent.participantId ?? null;
};
export const getParticipationStatus = (parent: RegistrationType) => {
  return parent.participationStatus ?? null;
};
export const getPaymentCodeId = (parent: RegistrationType) => {
  return parent.paymentCodeId ?? null;
};
export const getPaymentOptionsComment = (parent: RegistrationType) => {
  return parent.paymentOptionsComment ?? null;
};
export const getRegisteredById = (parent: RegistrationType) => {
  return parent.registeredById ?? null;
};
export const getSeason = (parent: RegistrationType) => {
  return parent.season ?? null;
};
export const getShortSize = (parent: RegistrationType) => {
  return parent.shortSize ?? null;
};
export const getState = (parent: RegistrationType) => {
  return parent.state ?? null;
};
export const getTShirtSize = (parent: RegistrationType) => {
  return parent.tShirtSize ?? null;
};
export const getTryout = (parent: RegistrationType) => {
  return parent.tryout ?? null;
};
export const getUpdatedAt = (parent: RegistrationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getWeight = (parent: RegistrationType) => {
  return parent.weight ?? null;
};

export const Registration: Resolvers["Registration"] = {
  __resolveReference: async (obj) => {
    return await db.client.registration.findFirst({
      where: {
        id: obj.id,
      },
    });
  },
  activityId: getActivityId,
  participantId: getParticipantId,
  registeredById: getRegisteredById,
  paid: getPaid,
  season: getSeason,
  groupId: getGroupId,
  tShirtSize: getTShirtSize,
  weight: getWeight,
  height: getHeight,
  comment: getComment,
  tryout: getTryout,
  state: getState,
  paymentOptionsComment: getPaymentOptionsComment,
  participationStatus: getParticipationStatus,
  paymentCodeId: getPaymentCodeId,
  shortSize: getShortSize,
  equipmentJerseySize: getEquipmentJerseySize,
  equipmentPantSize: getEquipmentPantSize,
  equipmentJacketSize: getEquipmentJacketSize,
  equipmentShoeSize: getEquipmentShoeSize,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Activity: async (ref) => {
    if (ref.activityId === null) return null;
    return {
      __typename: "Activity",
      id: ref.activityId,
    };
  },
  Group: async (parent) => {
    if (parent.groupId === null) return null;
    return await db.client.group.findFirst({
      where: {
        id: parent.groupId,
      },
    });
  },
  GroupRegistrations: async (parent) => {
    return await db.client.groupRegistration.findMany({
      where: {
        registrationId: parent.id,
      },
    });
  },
  Participant: async (ref) => {
    if (ref.participantId === null) return null;
    return {
      __typename: "Person",
      id: ref.participantId,
    };
  },
  RegisteredBy: async (ref) => {
    if (ref.registeredById === null) return null;
    return {
      __typename: "Person",
      id: ref.registeredById,
    };
  },
};
