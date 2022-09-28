import * as F from "./field-resolvers";
import sinon from "sinon";
import { PaymentCodeType } from "./types";

describe("PaymentCode field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: PaymentCodeType = {
    id: "123-456",
    schoolId: "234-567",
    name: "Please Pay Me",
    code: "PPM",
    active: true,
    createdAt: now,
    updatedAt: now,
  };
  it("active", () => {
    const result = F.getActive(parent);
    sinon.assert.match(result, parent.active);
  });
  it("code", () => {
    const result = F.getCode(parent);
    sinon.assert.match(result, parent.code);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
