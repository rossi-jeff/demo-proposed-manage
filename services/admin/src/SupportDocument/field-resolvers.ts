import { Resolvers } from "../../generated/graphql";
import { SupportDocumentType } from "./types";

export const getCreatedAt = (parent: SupportDocumentType) => {
  return parent.createdAt != null ? parent.createdAt.toString() : null;
};
export const getDocumentText = (parent: SupportDocumentType) => {
  return parent.documentText ?? null;
};
export const getName = (parent: SupportDocumentType) => {
  return parent.name ?? null;
};
export const getSectionHeader = (parent: SupportDocumentType) => {
  return parent.sectionHeader ?? null;
};
export const getUpdatedAt = (parent: SupportDocumentType) => {
  return parent.updatedAt != null ? parent.updatedAt.toString() : null;
};

export const SupportDocument: Resolvers["SupportDocument"] = {
  name: getName,
  documentText: getDocumentText,
  sectionHeader: getSectionHeader,
  createdAt: getCreatedAt,
  updatedAt: getUpdatedAt,
};
