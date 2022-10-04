import * as F from "./field-resolvers";
import { DirectingRoleType } from "./types";
import sinon from "sinon";

describe("DirectingRole field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: DirectingRoleType = {
    id: "123",
    personId: "456",
    eventId: "789",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("eventId", () => {
    const result = F.getEventId(parent);
    sinon.assert.match(result, parent.eventId);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
