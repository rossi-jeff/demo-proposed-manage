import * as F from "./field-resolvers";
import { FuelMyClubOrganizationType } from "./types";
import sinon from "sinon";

describe("FuelMyClubOrganization field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FuelMyClubOrganizationType = {
    id: "123",
    schoolId: "456",
    data: "foo bar biz baz",
    fmcOrganization: "fmc organization",
    fmcFundraiser: "fmc fundraiser",
    fmcParticipant: "fmc participant",
    salesLink: "sales link",
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
  it("fmcFundraiser", () => {
    const result = F.getFmcFundraiser(parent);
    sinon.assert.match(result, parent.fmcFundraiser);
  });
  it("fmcOrganization", () => {
    const result = F.getFmcOrganization(parent);
    sinon.assert.match(result, parent.fmcOrganization);
  });
  it("fmcParticipant", () => {
    const result = F.getFmcParticipant(parent);
    sinon.assert.match(result, parent.fmcParticipant);
  });
  it("salesLink", () => {
    const result = F.getSalesLink(parent);
    sinon.assert.match(result, parent.salesLink);
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
