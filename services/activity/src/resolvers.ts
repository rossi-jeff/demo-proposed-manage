import type { Resolvers } from "../generated/graphql";
import { Person } from "./Person/field-resolvers";
import { people, person } from "./Person/query-resolvers";
import { School } from "./School/field-resolvers";

export const resolvers: Resolvers = {
  Query: {
    people,
    person,
  },
  Person,
  School,
};
