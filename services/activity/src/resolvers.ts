import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { Event } from "./Event/field-resolvers";
import { events, event } from "./Event/query-resolvers";
import { Group } from "./Group/field-resolvers";
import { group, groups } from "./Group/query-resolvers";
import { GroupRegistration } from "./GroupRegistration/field-resolvers";
import {
  groupRegistration,
  groupRegistrations,
} from "./GroupRegistration/query-resolvers";
import { Registration } from "./Registration/field-resolvers";
import { registration, registrations } from "./Registration/query-resolvers";
import { Roster } from "./Roster/field-resolvers";
import { roster, rosters } from "./Roster/query-resolvers";
import { Ticket } from "./Ticket/field-resolvers";
import { ticket, tickets } from "./Ticket/query-resolvers";
import { Venture } from "./Venture/field-resolvers";
import { venture, ventures } from "./Venture/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    events,
    event,
    groups,
    group,
    groupRegistrations,
    groupRegistration,
    registrations,
    registration,
    rosters,
    roster,
    tickets,
    ticket,
    ventures,
    venture,
  },
  Activity,
  Event,
  Group,
  GroupRegistration,
  Registration,
  Roster,
  Ticket,
  Venture,
};
