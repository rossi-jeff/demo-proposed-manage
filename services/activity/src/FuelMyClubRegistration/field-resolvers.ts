import { Resolvers } from "../../generated/graphql";
import { db } from "../db";
import { FuelMyClubRegistrationType } from "./types";

export const getCreatedAt = (parent: FuelMyClubRegistrationType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getData = (parent: FuelMyClubRegistrationType) => {
  return parent.data ?? null;
};
export const getRegistrationId = (parent: FuelMyClubRegistrationType) => {
  return parent.registrationId ?? null;
};
export const getUpdatedAt = (parent: FuelMyClubRegistrationType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const FuelMyClubRegistration: Resolvers["FuelMyClubRegistration"] = {
  registrationId: getRegistrationId,
  data: getData,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
  Registration: async (parent) => {
    if (parent.registrationId === null) return null;
    return await db.client.registration.findFirst({
      where: {
        id: parent.registrationId,
      },
    });
  },
};
