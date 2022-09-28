import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { Event } from "./Event/field-resolvers";
import { events, event } from "./Event/query-resolvers";
import { Group } from "./Group/field-resolvers";
import { group, groups } from "./Group/query-resolvers";
import { Registration } from "./Registration/field-resolvers";
import { registration, registrations } from "./Registration/query-resolvers";
import { Venture } from "./Venture/field-resolvers";
import { venture, ventures } from "./Venture/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    events,
    event,
    groups,
    group,
    registrations,
    registration,
    ventures,
    venture,
  },
  Activity,
  Event,
  Group,
  Registration,
  Venture,
};
