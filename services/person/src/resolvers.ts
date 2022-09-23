import { Resolvers } from "../generated/graphql";
import { EmergencyContact } from "./EmergencyContact/field-resolvers";
import {
  emergencyContact,
  emergencyContacts,
} from "./EmergencyContact/query-resolvers";
import { Person } from "./Person/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    emergencyContacts,
    emergencyContact,
  },
  EmergencyContact,
  Person,
};
