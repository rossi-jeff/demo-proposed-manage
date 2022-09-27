import * as F from "./field-resolvers";
import sinon from "sinon";
import { AlergicConditionType } from "./types";

describe("AlergicCondition field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: AlergicConditionType = {
    id: "123-456",
    personId: "345-6768",
    allergyCondition: "runny nose",
    severity: "gushing",
    reaction: "sneezing",
    createdAt: now,
    updatedAt: now,
  };
  it("allergyCondition", () => {
    const result = F.getAllergyCondition(parent);
    sinon.assert.match(result, parent.allergyCondition);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("reaction", () => {
    const result = F.getReaction(parent);
    sinon.assert.match(result, parent.reaction);
  });
  it("severity", () => {
    const result = F.getSeverity(parent);
    sinon.assert.match(result, parent.severity);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
