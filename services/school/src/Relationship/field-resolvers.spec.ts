import * as F from "./field-resolvers";
import { RelationshipType } from "./types";
import sinon from "sinon";

describe("Relationship field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RelationshipType = {
    id: "123",
    subjectId: "456",
    receiverId: "789",
    relationshipType: "Father",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("receiverId", () => {
    const result = F.getReceiverId(parent);
    sinon.assert.match(result, parent.receiverId);
  });
  it("relationshipType", () => {
    const result = F.getRelationshipType(parent);
    sinon.assert.match(result, parent.relationshipType);
  });
  it("subjectId", () => {
    const result = F.getSubjectId(parent);
    sinon.assert.match(result, parent.subjectId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
