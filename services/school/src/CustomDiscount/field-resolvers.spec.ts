import * as F from "./field-resolvers";
import { CustomDiscountType } from "./types";
import sinon from "sinon";

describe("CustomDiscount field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CustomDiscountType = {
    id: "123",
    schoolId: "456",
    kind: "foo bar",
    condition: 123,
    active: true,
    discountedFee: 234,
    activityId: "789",
    secondaryCondition: "biz baz buz",
    createdAt: now,
    updatedAt: now,
  };
  it("active", () => {
    const result = F.getActive(parent);
    sinon.assert.match(result, parent.active);
  });
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("condition", () => {
    const result = F.getCondition(parent);
    sinon.assert.match(result, parent.condition);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("discountedFee", () => {
    const result = F.getDiscountedFee(parent);
    sinon.assert.match(result, parent.discountedFee);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("secondaryCondition", () => {
    const result = F.getSecondaryCondition(parent);
    sinon.assert.match(result, parent.secondaryCondition);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
