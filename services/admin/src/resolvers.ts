import { Resolvers } from "../generated/graphql";
import { school, schools } from "./School/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    schools,
    school,
  },
};
