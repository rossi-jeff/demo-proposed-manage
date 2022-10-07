import * as F from "./field-resolvers";
import { OccuranceType } from "./types";
import sinon from "sinon";

describe("Occurance field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: OccuranceType = {
    id: "123",
    from: now,
    to: now,
    ventureId: "456",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("from", () => {
    const result = F.getFrom(parent);
    sinon.assert.match(result, parent.from?.toString());
  });
  it("to", () => {
    const result = F.getTo(parent);
    sinon.assert.match(result, parent.to?.toString());
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("ventureId", () => {
    const result = F.getVentureId(parent);
    sinon.assert.match(result, parent.ventureId);
  });
});
