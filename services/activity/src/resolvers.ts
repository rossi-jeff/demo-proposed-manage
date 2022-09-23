import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { Group } from "./Group/field-resolvers";
import { group, groups } from "./Group/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    groups,
    group,
  },
  Activity,
  Group,
};
