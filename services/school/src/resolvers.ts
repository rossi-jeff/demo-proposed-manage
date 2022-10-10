import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Address } from "./Address/field-resolvers";
import { address, addresses } from "./Address/query-resolvers";
import { Award } from "./Award/field-resolvers";
import { award, awards } from "./Award/query-resolvers";
import { Color } from "./Color/field-resolvers";
import { color, colors } from "./Color/query-resolvers";
import { CustomDiscount } from "./CustomDiscount/field-resolvers";
import {
  customDiscount,
  customDiscounts,
} from "./CustomDiscount/query-resolvers";
import { CustomQuestion } from "./CustomQuestion/field-resolvers";
import {
  customQuestion,
  customQuestions,
} from "./CustomQuestion/query-resolvers";
import { Email } from "./Email/field-resolvers";
import { email, emails } from "./Email/query-resolvers";
import { FeatureForSeason } from "./FeatureForSeason/field-resolvers";
import {
  featureForSeason,
  featureForSeasons,
} from "./FeatureForSeason/query-resolvers";
import { Fee } from "./Fee/field-resolvers";
import { fees, fee } from "./Fee/query-resolvers";
import { FuelMyClubOrganization } from "./FuelMyClubOrganization/field-resolvers";
import {
  fuelMyClubOrganization,
  fuelMyClubOrganizations,
} from "./FuelMyClubOrganization/query-resolvers";
import { LegalForm } from "./LegalForm/field-resolvers";
import { legalForm, legalForms } from "./LegalForm/query-resolvers";
import { LegalVideo } from "./LegalVideo/field-resolvers";
import { legalVideo, legalVideos } from "./LegalVideo/query-resolvers";
import { MedicalForm } from "./MedicalForm/field-resolvers";
import { medicalForm, medicalForms } from "./MedicalForm/query-resolvers";
import { ParticipantInformationConfiguration } from "./ParticipantInformationConfiguration/field-resolvers";
import {
  participantInformationConfiguration,
  participantInformationConfigurations,
} from "./ParticipantInformationConfiguration/query-resolvers";
import { PaymentCode } from "./PaymentCode/field-resolvers";
import { paymentCode, paymentCodes } from "./PaymentCode/query-resolvers";
import { Person } from "./Person/field-resolvers";
import { people, person } from "./Person/query-resolvers";
import { Phone } from "./Phone/field-resolvers";
import { phone, phones } from "./Phone/query-resolvers";
import { Relationship } from "./Relationship/field-resolvers";
import { relationship, relationships } from "./Relationship/query-resolvers";
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
    customDiscounts,
    customDiscount,
    customQuestions,
    customQuestion,
    emails,
    email,
    featureForSeasons,
    featureForSeason,
    fees,
    fee,
    fuelMyClubOrganizations,
    fuelMyClubOrganization,
    legalForms,
    legalForm,
    legalVideos,
    legalVideo,
    medicalForms,
    medicalForm,
    participantInformationConfigurations,
    participantInformationConfiguration,
    paymentCodes,
    paymentCode,
    people,
    person,
    phones,
    phone,
    relationships,
    relationship,
  },
  Activity,
  Address,
  Award,
  Color,
  CustomDiscount,
  CustomQuestion,
  Email,
  FeatureForSeason,
  Fee,
  FuelMyClubOrganization,
  LegalForm,
  LegalVideo,
  MedicalForm,
  ParticipantInformationConfiguration,
  PaymentCode,
  Person,
  Phone,
  Relationship,
  School,
};
