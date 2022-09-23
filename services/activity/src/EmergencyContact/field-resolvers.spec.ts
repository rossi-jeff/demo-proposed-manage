import * as F from "./field-resolvers";
import sinon from "sinon";
import { EmergencyContactType } from "./types";

describe("EmergencyContact field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: EmergencyContactType = {
    id: "123-456",
    personId: "234-567",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "999-888-7777",
    relationship: "Father",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("firstName", () => {
    const result = F.getFirstName(parent);
    sinon.assert.match(result, parent.firstName);
  });
  it("lastName", () => {
    const result = F.getLastName(parent);
    sinon.assert.match(result, parent.lastName);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("phoneNumber", () => {
    const result = F.getPhoneNumber(parent);
    sinon.assert.match(result, parent.phoneNumber);
  });
  it("relationship", () => {
    const result = F.getRelationship(parent);
    sinon.assert.match(result, parent.relationship);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
