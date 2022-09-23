import type { Resolvers } from "../generated/graphql";
import { EmergencyContact } from "./EmergencyContact/field-resolvers";
import {
  emergencyContact,
  emergencyContacts,
} from "./EmergencyContact/query-resolvers";
import { Person } from "./Person/field-resolvers";
import { people, person } from "./Person/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    emergencyContacts,
    emergencyContact,
    people,
    person,
  },
  EmergencyContact,
  Person,
  School,
};
