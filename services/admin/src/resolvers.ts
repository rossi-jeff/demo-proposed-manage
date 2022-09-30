import type { Resolvers } from "../generated/graphql";
import { Role } from "./Role/field-resolvers";
import { role, roles } from "./Role/query-resolvers";
import { School } from "./School/field-resolvers";
import { school, schools } from "./School/query-resolvers";
import { SupportDocument } from "./SupportDocument/field-resolvers";
import {
  supportDocument,
  supportDocuments,
} from "./SupportDocument/query-resolvers";

export const resolvers: Resolvers = {
  Query: {
    roles,
    role,
    schools,
    school,
    supportDocuments,
    supportDocument,
  },
  Role,
  School,
  SupportDocument,
};
