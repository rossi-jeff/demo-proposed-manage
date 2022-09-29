import { Resolvers } from "../generated/graphql";
import { Affiliation } from "./Affiliation/field-resolvers";
import { affiliation, affiliations } from "./Affiliation/query-resolvers";
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
import { Invite } from "./Invite/field-resolvers";
import { invite, invites } from "./Invite/query-resolvers";
import { MedicalCondition } from "./MedicalCondition/field-resolvers";
import {
  medicalCondition,
  medicalConditions,
} from "./MedicalCondition/query-resolvers";
import { Person } from "./Person/field-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    affiliations,
    affiliation,
    alergicConditions,
    alergicCondition,
    emergencyContacts,
    emergencyContact,
    invites,
    invite,
    medicalConditions,
    medicalCondition,
  },
  Affiliation,
  AlergicCondition,
  EmergencyContact,
  Invite,
  MedicalCondition,
  Person,
  School,
};
