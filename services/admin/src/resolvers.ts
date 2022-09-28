import type { Resolvers } from "../generated/graphql";
import { Role } from "./Role/field-resolvers";
import { role, roles } from "./Role/query-resolvers";
import { School } from "./School/field-resolvers";
import { school, schools } from "./School/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    roles,
    role,
    schools,
    school,
  },
  Role,
  School,
};
