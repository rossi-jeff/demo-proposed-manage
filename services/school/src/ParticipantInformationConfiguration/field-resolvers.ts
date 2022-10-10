import { Resolvers } from "../../generated/graphql";
import { ParticipantInformationConfigurationType } from "./types";
import { db } from "../db";

export const getActivityId = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.activityId ?? null;
};
export const getActivityKind = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.activityKind ?? null;
};
export const getCreatedAt = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getKey = (parent: ParticipantInformationConfigurationType) => {
  return parent.key ?? null;
};
export const getRequired = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.required ?? null;
};
export const getSchoolId = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.schoolId ?? null;
};
export const getUpdatedAt = (
  parent: ParticipantInformationConfigurationType
) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};
export const getVisible = (parent: ParticipantInformationConfigurationType) => {
  return parent.visible ?? null;
};

export const ParticipantInformationConfiguration: Resolvers["ParticipantInformationConfiguration"] =
  {
    schoolId: getSchoolId,
    activityId: getActivityId,
    key: getKey,
    visible: getVisible,
    required: getRequired,
    activityKind: getActivityKind,
    createdAt: getCreatedAt,
    updatedAt: getUpdatedAt,
    Activity: async (parent) => {
      if (parent.activityId === null) return null;
      return await db.client.activity.findFirst({
        where: {
          id: parent.activityId,
        },
      });
    },
    School: async (ref) => {
      if (ref.schoolId === null) return null;
      return {
        __typename: "School",
        id: ref.schoolId,
      };
    },
  };
