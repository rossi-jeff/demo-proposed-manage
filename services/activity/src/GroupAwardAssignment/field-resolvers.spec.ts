import * as F from "./field-resolvers";
import { GroupAwardAssignmentType } from "./types";
import sinon from "sinon";

describe("GroupAwardAssignment field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: GroupAwardAssignmentType = {
    id: "123",
    recipientId: "456",
    awardId: "789",
    state: 123,
    createdAt: now,
    updatedAt: now,
  };
  it("awardId", () => {
    const result = F.getAwardId(parent);
    sinon.assert.match(result, parent.awardId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("recipientId", () => {
    const result = F.getRecipientId(parent);
    sinon.assert.match(result, parent.recipientId);
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
