import * as F from "./field-resolvers";
import { LegalVideoType } from "./types";
import sinon from "sinon";

describe("LegalVideo field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: LegalVideoType = {
    id: "123",
    schoolId: "456",
    name: "Meme Vid",
    checkboxText: "foo bar biz baz",
    remoteId: "asdf-ghjk",
    requireStudentSignOff: false,
    createdAt: now,
    updatedAt: now,
  };
  it("checkboxText", () => {
    const result = F.getCheckboxText(parent);
    sinon.assert.match(result, parent.checkboxText);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("remoteId", () => {
    const result = F.getRemoteId(parent);
    sinon.assert.match(result, parent.remoteId);
  });
  it("requireStudentSignOff", () => {
    const result = F.getRequireStudentSignOff(parent);
    sinon.assert.match(result, parent.requireStudentSignOff);
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
