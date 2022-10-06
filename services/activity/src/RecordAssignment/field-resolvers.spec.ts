import * as F from "./field-resolvers";
import { RecordAssignmentType } from "./types";
import sinon from "sinon";

describe("RecordAssignment field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RecordAssignmentType = {
    id: "123",
    recipientId: "456",
    rosterId: "789",
    recordId: "567",
    recordSetDate: now,
    result: 123,
    state: 456,
    bannerYear: "2022",
    createdAt: now,
    updatedAt: now,
  };
  it("bannerYear", () => {
    const result = F.getBannerYear(parent);
    sinon.assert.match(result, parent.bannerYear);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("recipientId", () => {
    const result = F.getRecipientId(parent);
    sinon.assert.match(result, parent.recipientId);
  });
  it("recordId", () => {
    const result = F.getRecordId(parent);
    sinon.assert.match(result, parent.recordId);
  });
  it("recordSetDate", () => {
    const result = F.getRecordSetDate(parent);
    sinon.assert.match(result, parent.recordSetDate?.toString());
  });
  it("result", () => {
    const result = F.getResult(parent);
    sinon.assert.match(result, parent.result);
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
