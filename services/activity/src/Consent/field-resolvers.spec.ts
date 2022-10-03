import * as F from "./field-resolvers";
import { ConsentType } from "./types";
import sinon from "sinon";

describe("Consent field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: ConsentType = {
    id: "123-456",
    legalFormId: "234-567",
    registrationId: "345-678",
    accepted: true,
    checkboxText: "foo bar biz baz",
    sha1: "ERTYU-TYUIO-DFGHJ",
    createdAt: now,
    updatedAt: now,
  };
  it("accepted", () => {
    const result = F.getAccepted(parent);
    sinon.assert.match(result, parent.accepted);
  });
  it("checkboxText", () => {
    const result = F.getCheckboxText(parent);
    sinon.assert.match(result, parent.checkboxText);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("legalFormId", () => {
    const result = F.getLegalFormId(parent);
    sinon.assert.match(result, parent.legalFormId);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("sha1", () => {
    const result = F.getSha1(parent);
    sinon.assert.match(result, parent.sha1);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
