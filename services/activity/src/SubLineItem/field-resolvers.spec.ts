import * as F from "./field-resolvers";
import { SubLineItemType } from "./types";
import sinon from "sinon";

describe("SubLineItem field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: SubLineItemType = {
    id: "123",
    lineItemId: "456",
    type: "foo bar",
    amount: 123,
    settledAt: now,
    remoteId: 456,
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
  it("lineItemId", () => {
    const result = F.getLineItemId(parent);
    sinon.assert.match(result, parent.lineItemId);
  });
  it("remoteId", () => {
    const result = F.getRemoteId(parent);
    sinon.assert.match(result, parent.remoteId);
  });
  it("settledAt", () => {
    const result = F.getSettledAt(parent);
    sinon.assert.match(result, parent.settledAt?.toString());
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
