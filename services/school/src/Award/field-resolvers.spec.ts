import * as F from "./field-resolvers";
import { AwardType } from "./types";
import sinon from "sinon";

describe("Award field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: AwardType = {
    id: "123",
    schoolId: "456",
    name: "Super Duper Achievement",
    position: 123,
    active: true,
    createdAt: now,
    updatedAt: now,
  };
  it("active", () => {
    const result = F.getActive(parent);
    sinon.assert.match(result, parent.active);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("position", () => {
    const result = F.getPosition(parent);
    sinon.assert.match(result, parent.position);
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
