import * as F from "./field-resolvers";
import { GroupRegistrationType } from "./types";
import sinon from "sinon";

describe("GroupRegistration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: GroupRegistrationType = {
    id: "123",
    registrationId: "456",
    groupId: "789",
    rosterId: "678",
    finalizeDate: now,
    jerseyNumber: "00",
    position: "Center Field",
    state: 123,
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("finalizeDate", () => {
    const result = F.getFinalizeDate(parent);
    sinon.assert.match(result, parent.finalizeDate?.toString());
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("jerseyNumber", () => {
    const result = F.getJerseyNumber(parent);
    sinon.assert.match(result, parent.jerseyNumber);
  });
  it("position", () => {
    const result = F.getPosition(parent);
    sinon.assert.match(result, parent.position);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("rosterId", () => {
    const result = F.getRosterId(parent);
    sinon.assert.match(result, parent.rosterId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
