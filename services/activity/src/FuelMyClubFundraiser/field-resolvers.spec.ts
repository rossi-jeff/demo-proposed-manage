import * as F from "./field-resolvers";
import { FuelMyClubFundraiserType } from "./types";
import sinon from "sinon";

describe("FuelMyClubFundraiser field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FuelMyClubFundraiserType = {
    id: "123",
    fuelMyClubActivityId: "456",
    season: "Fall",
    externalFmcFundraiserId: "XXX-YYY-ZZZ",
    contactPersonId: "789",
    config: 123,
    leadInMessage: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("config", () => {
    const result = F.getConfig(parent);
    sinon.assert.match(result, parent.config);
  });
  it("contactPersonId", () => {
    const result = F.getContactPersonId(parent);
    sinon.assert.match(result, parent.contactPersonId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("externalFmcFundraiserId", () => {
    const result = F.getExternalFmcFundraiserId(parent);
    sinon.assert.match(result, parent.externalFmcFundraiserId);
  });
  it("fuelMyClubActivityId", () => {
    const result = F.getFuelMyClubActivityId(parent);
    sinon.assert.match(result, parent.fuelMyClubActivityId);
  });
  it("leadInMessage", () => {
    const result = F.getLeadInMessage(parent);
    sinon.assert.match(result, parent.leadInMessage);
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
