import * as F from "./field-resolvers";
import sinon from "sinon";
import { ActivityType } from "./types";

describe("Activity field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: ActivityType = {
    id: "123-456-789",
    schoolId: "987-654-321",
    registerable: false,
    active: true,
    archived: false,
    steps: 123,
    emailFooter: "cordially yours",
    termsAndConditions: "blah blah blah",
    kind: "once in a while",
    leadInMessage: "once upon a time ...",
    noCut: true,
    currentSeason: "Fall",
    athleticSeason: "Winter",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("active", () => {
    const result = F.getActive(parent);
    sinon.assert.match(result, parent.active);
  });
  it("archived", () => {
    const result = F.getArchived(parent);
    sinon.assert.match(result, parent.archived);
  });
  it("athleticSeason", () => {
    const result = F.getAthleticSeason(parent);
    sinon.assert.match(result, parent.athleticSeason);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("currentSeason", () => {
    const result = F.getCurrentSeason(parent);
    sinon.assert.match(result, parent.currentSeason);
  });
  it("emailFooter", () => {
    const result = F.getEmailFooter(parent);
    sinon.assert.match(result, parent.emailFooter);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("leadInMessage", () => {
    const result = F.getLeadInMessage(parent);
    sinon.assert.match(result, parent.leadInMessage);
  });
  it("noCut", () => {
    const result = F.getNoCut(parent);
    sinon.assert.match(result, parent.noCut);
  });
  it("registerable", () => {
    const result = F.getRegisterable(parent);
    sinon.assert.match(result, parent.registerable);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("steps", () => {
    const result = F.getSteps(parent);
    sinon.assert.match(result, parent.steps);
  });
  it("termsAndConditions", () => {
    const result = F.getTermsAndConditions(parent);
    sinon.assert.match(result, parent.termsAndConditions);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
