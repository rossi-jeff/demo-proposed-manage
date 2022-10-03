import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Address } from "./Address/field-resolvers";
import { address, addresses } from "./Address/query-resolvers";
import { Award } from "./Award/field-resolvers";
import { award, awards } from "./Award/query-resolvers";
import { Color } from "./Color/field-resolvers";
import { color, colors } from "./Color/query-resolvers";
import { Email } from "./Email/field-resolvers";
import { email, emails } from "./Email/query-resolvers";
import { Fee } from "./Fee/field-resolvers";
import { fees, fee } from "./Fee/query-resolvers";
import { LegalForm } from "./LegalForm/field-resolvers";
import { legalForm, legalForms } from "./LegalForm/query-resolvers";
import { MedicalForm } from "./MedicalForm/field-resolvers";
import { medicalForm, medicalForms } from "./MedicalForm/query-resolvers";
import { PaymentCode } from "./PaymentCode/field-resolvers";
import { paymentCode, paymentCodes } from "./PaymentCode/query-resolvers";
import { Person } from "./Person/field-resolvers";
import { people, person } from "./Person/query-resolvers";
import { Phone } from "./Phone/field-resolvers";
import { phone, phones } from "./Phone/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity,
    addresses,
    address,
    awards,
    award,
    colors,
    color,
    emails,
    email,
    fees,
    fee,
    legalForms,
    legalForm,
    medicalForms,
    medicalForm,
    paymentCodes,
    paymentCode,
    people,
    person,
    phones,
    phone,
  },
  Activity,
  Address,
  Award,
  Color,
  Email,
  Fee,
  LegalForm,
  MedicalForm,
  PaymentCode,
  Person,
  Phone,
  School,
};
