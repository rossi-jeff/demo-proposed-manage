import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { Award } from "./Award/field-resolvers";
import { AwardAssignment } from "./AwardAssignment/field-resolvers";
import {
  awardAssignment,
  awardAssignments,
} from "./AwardAssignment/query-resolvers";
import { CampShortOrder } from "./CampShortOrder/field-resolvers";
import { CampTshirtOrder } from "./CampTshirtOrder/field-resolvers";
import {
  campTshirtOrder,
  campTshirtOrders,
} from "./CampTshirtOrder/query-resolvers";
import { Consent } from "./Consent/field-resolvers";
import { consent, consents } from "./Consent/query-resolvers";
import { Event } from "./Event/field-resolvers";
import { events, event } from "./Event/query-resolvers";
import { FuelMyClubActivity } from "./FuelMyClubActivity/field-resolvers";
import {
  fuelMyClubActivities,
  fuelMyClubActivity,
} from "./FuelMyClubActivity/query-resolvers";
import { FuelMyClubFundraiser } from "./FuelMyClubFundraiser/field-resolvers";
import {
  fuelMyClubFundraiser,
  fuelMyClubFundraisers,
} from "./FuelMyClubFundraiser/query-resolvers";
import { FuelMyClubRegistration } from "./FuelMyClubRegistration/field-resolvers";
import {
  fuelMyClubRegistration,
  fuelMyClubRegistrations,
} from "./FuelMyClubRegistration/query-resolvers";
import { Group } from "./Group/field-resolvers";
import { group, groups } from "./Group/query-resolvers";
import { GroupAward } from "./GroupAward/field-resolvers";
import { groupAward, groupAwards } from "./GroupAward/query-resolvers";
import { GroupAwardAssignment } from "./GroupAwardAssignment/field-resolvers";
import {
  groupAwardAssignment,
  groupAwardAssignments,
} from "./GroupAwardAssignment/query-resolvers";
import { GroupRegistration } from "./GroupRegistration/field-resolvers";
import {
  groupRegistration,
  groupRegistrations,
} from "./GroupRegistration/query-resolvers";
import { Invoice } from "./Invoice/field-resolvers";
import { LegalForm } from "./LegalForm/field-resolvers";
import { LineItem } from "./LineItem/field-resolvers";
import { lineItem, lineItems } from "./LineItem/query-resolvers";
import { Message } from "./Message/field-resolvers";
import { message, messages } from "./Message/query-resolvers";
import { Occurance } from "./Occurance/field-resolvers";
import { occurance, occurances } from "./Occurance/query-resolvers";
import { PaymentCode } from "./PaymentCode/field-resolvers";
import { Person } from "./Person/field-resolvers";
import { Record } from "./Record/field-resolvers";
import { record, records } from "./Record/query-resolvers";
import { RecordAssignment } from "./RecordAssignment/field-resolvers";
import {
  recordAssignment,
  recordAssignments,
} from "./RecordAssignment/query-resolvers";
import { Registration } from "./Registration/field-resolvers";
import { registration, registrations } from "./Registration/query-resolvers";
import { Roster } from "./Roster/field-resolvers";
import { roster, rosters } from "./Roster/query-resolvers";
import { School } from "./School/field-resolvers";
import { SubLineItem } from "./SubLineItem/field-resolvers";
import { subLineItem, subLineItems } from "./SubLineItem/query-resolvers";
import { Ticket } from "./Ticket/field-resolvers";
import { ticket, tickets } from "./Ticket/query-resolvers";
import { TicketRegistration } from "./TicketRegistration/field-resolvers";
import {
  ticketRegistration,
  ticketRegistrations,
} from "./TicketRegistration/query-resolvers";
import { Venture } from "./Venture/field-resolvers";
import { venture, ventures } from "./Venture/query-resolvers";
import { VentureRegistration } from "./VentureRegistration/field-resolvers";
import {
  ventureRegistration,
  ventureRegistrations,
} from "./VentureRegistration/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    awardAssignments,
    awardAssignment,
    campTshirtOrders,
    campTshirtOrder,
    consents,
    consent,
    events,
    event,
    fuelMyClubActivities,
    fuelMyClubActivity,
    fuelMyClubFundraisers,
    fuelMyClubFundraiser,
    fuelMyClubRegistrations,
    fuelMyClubRegistration,
    groups,
    group,
    groupAwards,
    groupAward,
    groupAwardAssignments,
    groupAwardAssignment,
    groupRegistrations,
    groupRegistration,
    lineItems,
    lineItem,
    messages,
    message,
    occurances,
    occurance,
    records,
    record,
    recordAssignments,
    recordAssignment,
    registrations,
    registration,
    rosters,
    roster,
    subLineItems,
    subLineItem,
    tickets,
    ticket,
    ticketRegistrations,
    ticketRegistration,
    ventures,
    venture,
    ventureRegistrations,
    ventureRegistration,
  },
  Activity,
  Award,
  AwardAssignment,
  CampShortOrder,
  CampTshirtOrder,
  Consent,
  Event,
  FuelMyClubActivity,
  FuelMyClubFundraiser,
  FuelMyClubRegistration,
  Group,
  GroupAward,
  GroupAwardAssignment,
  GroupRegistration,
  Invoice,
  LegalForm,
  LineItem,
  Message,
  Occurance,
  PaymentCode,
  Person,
  Record,
  RecordAssignment,
  Registration,
  Roster,
  School,
  SubLineItem,
  Ticket,
  TicketRegistration,
  Venture,
  VentureRegistration,
};
