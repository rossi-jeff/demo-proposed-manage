import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Email } from "./Email/field-resolvers";
import { email, emails } from "./Email/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity,
    emails,
    email,
  },
  Activity,
  Email,
  School,
};
