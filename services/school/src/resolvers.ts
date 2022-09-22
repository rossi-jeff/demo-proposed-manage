import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Phone } from "./Phone/field-resolvers";
import { phone, phones } from "./Phone/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity,
    phones,
    phone,
  },
  Activity,
  Phone,
  School,
};
