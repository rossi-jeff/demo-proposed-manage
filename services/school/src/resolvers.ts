import type { Resolvers } from "../generated/graphql";
import { Activity } from "./Activity/field-resolvers";
import { activities, activity } from "./Activity/query-resolvers";
import { Address } from "./Address/field-resolvers";
import { address, addresses } from "./Address/query-resolvers";
import { Email } from "./Email/field-resolvers";
import { email, emails } from "./Email/query-resolvers";
import { Phone } from "./Phone/field-resolvers";
import { phone, phones } from "./Phone/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    activities,
    activity,
    addresses,
    address,
    emails,
    email,
    phones,
    phone,
  },
  Activity,
  Address,
  Email,
  Phone,
  School,
};
