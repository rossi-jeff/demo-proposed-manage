import { Resolvers } from "../generated/graphql";
import { Affiliation } from "./Affiliation/field-resolvers";
import { affiliation, affiliations } from "./Affiliation/query-resolvers";
import { AlergicCondition } from "./AlergicCondition/field-resolvers";
import {
  alergicCondition,
  alergicConditions,
} from "./AlergicCondition/query-resolvers";
import { CoachCertification } from "./CoachCertification/field-resolvers";
import {
  coachCertification,
  coachCertifications,
} from "./CoachCertification/query-resolvers";
import { EmergencyContact } from "./EmergencyContact/field-resolvers";
import {
  emergencyContact,
  emergencyContacts,
} from "./EmergencyContact/query-resolvers";
import { Invite } from "./Invite/field-resolvers";
import { invite, invites } from "./Invite/query-resolvers";
import { Invoice } from "./Invoice/field-resolvers";
import { invoice, invoices } from "./Invoice/query-resolvers";
import { InvoiceTransaction } from "./InvoiceTransaction/field-resolvers";
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
    coachCertifications,
    coachCertification,
    emergencyContacts,
    emergencyContact,
    invites,
    invite,
    invoices,
    invoice,
    medicalConditions,
    medicalCondition,
  },
  Affiliation,
  AlergicCondition,
  CoachCertification,
  EmergencyContact,
  Invite,
  Invoice,
  InvoiceTransaction,
  MedicalCondition,
  Person,
  School,
};
