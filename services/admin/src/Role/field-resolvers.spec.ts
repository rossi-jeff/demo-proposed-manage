import * as F from "./field-resolvers";
import { RoleType } from "./types";
import sinon from "sinon";

describe("Role field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RoleType = {
    id: "123.456",
    name: "Big Boss",
    isAdmin: false,
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("isAdmin", () => {
    const result = F.getIsAdmin(parent);
    sinon.assert.match(result, parent.isAdmin);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
