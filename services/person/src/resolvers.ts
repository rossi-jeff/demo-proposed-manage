import { Resolvers } from "../generated/graphql";
import { AlergicCondition } from "./AlergicCondition/field-resolvers";
import {
  alergicCondition,
  alergicConditions,
} from "./AlergicCondition/query-resolvers";
import { EmergencyContact } from "./EmergencyContact/field-resolvers";
import {
  emergencyContact,
  emergencyContacts,
} from "./EmergencyContact/query-resolvers";
import { Person } from "./Person/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    alergicConditions,
    alergicCondition,
    emergencyContacts,
    emergencyContact,
  },
  AlergicCondition,
  EmergencyContact,
  Person,
};
