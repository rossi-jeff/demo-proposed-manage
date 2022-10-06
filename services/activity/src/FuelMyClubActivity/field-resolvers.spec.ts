import * as F from "./field-resolvers";
import { FuelMyClubActivityType } from "./types";
import sinon from "sinon";

describe("FuelMyClubActivity field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FuelMyClubActivityType = {
    id: "123",
    activityId: "456",
    externalFmcOrganizationId: "foo-bar-biz-baz",
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("externalFmcOrganizationId", () => {
    const result = F.getExternalFmcOrganizationId(parent);
    sinon.assert.match(result, parent.externalFmcOrganizationId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
