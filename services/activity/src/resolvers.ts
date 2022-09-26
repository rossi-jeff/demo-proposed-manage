import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { Event } from "./Event/field-resolvers";
import { events, event } from "./Event/query-resolvers";
import { Group } from "./Group/field-resolvers";
import { group, groups } from "./Group/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    events,
    event,
    groups,
    group,
  },
  Activity,
  Event,
  Group,
};
