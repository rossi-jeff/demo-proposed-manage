import * as F from "./field-resolvers";
import { SupportDocumentType } from "./types";
import sinon from "sinon";

describe("SupportDocument field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: SupportDocumentType = {
    id: "123-456",
    name: "Doccy McDocFace",
    documentText: "biz baz buz",
    sectionHeader: "foo bar",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("documentText", () => {
    const result = F.getDocumentText(parent);
    sinon.assert.match(result, parent.documentText);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("sectionHeader", () => {
    const result = F.getSectionHeader(parent);
    sinon.assert.match(result, parent.sectionHeader);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
