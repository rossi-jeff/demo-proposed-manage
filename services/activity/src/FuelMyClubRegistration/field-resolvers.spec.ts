import * as F from "./field-resolvers";
import { FuelMyClubRegistrationType } from "./types";
import sinon from "sinon";

describe("FuelMyClubRegistration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FuelMyClubRegistrationType = {
    id: "123",
    registrationId: "456",
    data: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("data", () => {
    const result = F.getData(parent);
    sinon.assert.match(result, parent.data);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
