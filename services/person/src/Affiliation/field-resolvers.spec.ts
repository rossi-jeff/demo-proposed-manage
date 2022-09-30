import * as F from "./field-resolvers";
import { AffiliationType } from "./types";
import sinon from "sinon";

describe("Affiliation field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: AffiliationType = {
    id: "123-456",
    personId: "234-567",
    schoolId: "345-678",
    affiliationType: "fancy",
    createdAt: now,
    updatedAt: now,
  };
  it("affiliationType", () => {
    const result = F.getAffiliationType(parent);
    sinon.assert.match(result, parent.affiliationType);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
