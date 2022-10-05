import { Resolvers } from "../../generated/graphql";
import { DirectingRoleType } from "./types";

export const getCreatedAt = (parent: DirectingRoleType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getEventId = (parent: DirectingRoleType) => {
  return parent.eventId ?? null;
};
export const getPersonId = (parent: DirectingRoleType) => {
  return parent.personId ?? null;
};
export const getUpdatedAt = (parent: DirectingRoleType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const DirectingRole: Resolvers["DirectingRole"] = {
  personId: getPersonId,
  eventId: getEventId,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Event: async (ref) => {
    if (ref.eventId === null) return null;
    return {
      __typename: "Event",
      id: ref.eventId,
    };
  },
  Person: async (ref) => {
    if (ref.personId === null) return null;
    return {
      __typename: "Person",
      id: ref.personId,
    };
  },
};
