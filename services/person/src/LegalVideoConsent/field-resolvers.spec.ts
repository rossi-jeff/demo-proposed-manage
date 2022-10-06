import * as F from "./field-resolvers";
import { LegalVideoConsentType } from "./types";
import sinon from "sinon";

describe("LegalVideoConsent field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: LegalVideoConsentType = {
    id: "123",
    legalVideoId: "456",
    personId: "789",
    season: "Fall",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("legalVideoId", () => {
    const result = F.getLegalVideoId(parent);
    sinon.assert.match(result, parent.legalVideoId);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
