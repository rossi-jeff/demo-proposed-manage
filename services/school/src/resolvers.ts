import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Address } from "./Address/field-resolvers";
import { address, addresses } from "./Address/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity,
    addresses,
    address,
  },
  Activity,
  Address,
  School,
};
