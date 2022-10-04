import * as F from "./field-resolvers";
import { CoachCertificationType } from "./types";
import sinon from "sinon";

describe("CoachCertification field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CoachCertificationType = {
    id: "123",
    personId: "456",
    value: "foo",
    state: "Florida",
    code: "bar",
    createdAt: now,
    updatedAt: now,
  };
  it("code", () => {
    const result = F.getCode(parent);
    sinon.assert.match(result, parent.code);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("value", () => {
    const result = F.getValue(parent);
    sinon.assert.match(result, parent.value);
  });
});
