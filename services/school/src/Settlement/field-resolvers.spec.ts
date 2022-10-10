import * as F from "./field-resolvers";
import { SettlementType } from "./types";
import sinon from "sinon";

describe("Settlement field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: SettlementType = {
    id: "123",
    activityId: "456",
    schoolId: "789",
    startDate: now,
    endDate: now,
    amountCollected: 987,
    fees: 876,
    amountSettled: 765,
    percentage: 12,
    amountPaid: 234,
    amountRemaining: 345,
    final: false,
    flatFee: 456,
    percentageFee: 45,
    manualFee: 567,
    participantCount: 678,
    kind: 234,
    approval: 123,
    activityKind: "foo bar",
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("activityKind", () => {
    const result = F.getActivityKind(parent);
    sinon.assert.match(result, parent.activityKind);
  });
  it("amountCollected", () => {
    const result = F.getAmountCollected(parent);
    sinon.assert.match(result, parent.amountCollected);
  });
  it("amountPaid", () => {
    const result = F.getAmountPaid(parent);
    sinon.assert.match(result, parent.amountPaid);
  });
  it("amountRemaining", () => {
    const result = F.getAmountRemaining(parent);
    sinon.assert.match(result, parent.amountRemaining);
  });
  it("amountSettled", () => {
    const result = F.getAmountSettled(parent);
    sinon.assert.match(result, parent.amountSettled);
  });
  it("approval", () => {
    const result = F.getApproval(parent);
    sinon.assert.match(result, parent.approval);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("endDate", () => {
    const result = F.getEndDate(parent);
    sinon.assert.match(result, parent.endDate?.toString());
  });
  it("fees", () => {
    const result = F.getFees(parent);
    sinon.assert.match(result, parent.fees);
  });
  it("final", () => {
    const result = F.getFinal(parent);
    sinon.assert.match(result, parent.final);
  });
  it("flatFee", () => {
    const result = F.getFlatFee(parent);
    sinon.assert.match(result, parent.flatFee);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("manualFee", () => {
    const result = F.getManualFee(parent);
    sinon.assert.match(result, parent.manualFee);
  });
  it("participantCount", () => {
    const result = F.getParticipantCount(parent);
    sinon.assert.match(result, parent.participantCount);
  });
  it("percentage", () => {
    const result = F.getPercentage(parent);
    sinon.assert.match(result, parent.percentage);
  });
  it("percentageFee", () => {
    const result = F.getPercentageFee(parent);
    sinon.assert.match(result, parent.percentageFee);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("startDate", () => {
    const result = F.getStartDate(parent);
    sinon.assert.match(result, parent.startDate?.toString());
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
