import * as F from "./field-resolvers";
import { MedicalConditionType } from "./types";
import sinon from "sinon";

describe("MedicalCondition field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: MedicalConditionType = {
    id: "abc-def",
    personId: "bcd-efg",
    name: "Tunnel Vision",
    physician: "Dr Dolittle",
    dateOfDiagnosis: now,
    emergencyPlan: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("dateOfDiagnosis", () => {
    const result = F.getDateOfDiagnosis(parent);
    sinon.assert.match(result, parent.dateOfDiagnosis?.toString());
  });
  it("emergencyPlan", () => {
    const result = F.getEmergencyPlan(parent);
    sinon.assert.match(result, parent.emergencyPlan);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("physician", () => {
    const result = F.getPhysician(parent);
    sinon.assert.match(result, parent.physician);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
