import { Resolvers } from "../../generated/graphql";
import { InviteType } from "./types";

export const getAccepted = (parent: InviteType) => {
  return parent.accepted ?? null;
};
export const getCreatedAt = (parent: InviteType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getInvitedById = (parent: InviteType) => {
  return parent.invitedById ?? null;
};
export const getPersonId = (parent: InviteType) => {
  return parent.personId ?? null;
};
export const getSchoolId = (parent: InviteType) => {
  return parent.schoolId ?? null;
};
export const getSecret = (parent: InviteType) => {
  return parent.secret ?? null;
};
export const getUpdatedAt = (parent: InviteType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const Invite: Resolvers["Invite"] = {
  personId: getPersonId,
  invitedById: getInvitedById,
  schoolId: getSchoolId,
  accepted: getAccepted,
  secret: getSecret,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
  InvitedBy: async (ref) => {
    if (ref.invitedById === null) return null;
    return {
      __typename: "Person",
      id: ref.invitedById,
    };
  },
  School: async (ref) => {
    if (ref.schoolId === null) return null;
    return {
      __typename: "School",
      id: ref.schoolId,
    };
  },
};
