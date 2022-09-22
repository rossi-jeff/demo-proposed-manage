import * as F from "./field-resolvers";
import sinon from "sinon";
import { AddressType } from "./types";

describe("Address field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: AddressType = {
    id: "123-456",
    type: "PERSONAL",
    lineOne: "123 Made Up Street",
    lineTwo: "Suite 456",
    city: "Some City",
    state: "Some Stete",
    zipCode: "99999",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("city", () => {
    const result = F.getCity(parent);
    sinon.assert.match(result, parent.city);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("lineOne", () => {
    const result = F.getLineOne(parent);
    sinon.assert.match(result, parent.lineOne);
  });
  it("lineTwo", () => {
    const result = F.getLineTwo(parent);
    sinon.assert.match(result, parent.lineTwo);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("type", () => {
    const result = F.getType(parent);
    sinon.assert.match(result, parent.type);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("zipCode", () => {
    const result = F.getZipCode(parent);
    sinon.assert.match(result, parent.zipCode);
  });
});
