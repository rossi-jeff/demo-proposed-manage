import * as F from "./field-resolvers";
import sinon from "sinon";
import { FeeType } from "./types";

describe("Fee field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FeeType = {
    id: "123",
    name: "Excessive Fee",
    type: "FLAT",
    amount: 123,
    createdAt: now,
    updatedAt: now,
  };
  it("amount", () => {
    const result = F.getAmount(parent);
    sinon.assert.match(result, parent.amount);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("type", () => {
    const result = F.getType(parent);
    sinon.assert.match(result, parent.type);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
