import * as F from "./field-resolvers";
import { GroupAwardType } from "./types";
import sinon from "sinon";

describe("GroupAward field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: GroupAwardType = {
    id: "123",
    groupId: "234",
    name: "Group Award #1",
    state: 123,
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
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
