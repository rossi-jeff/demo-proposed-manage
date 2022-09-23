import * as F from "./field-resolvers";
import sinon from "sinon";
import { LegalFormType } from "./types";

describe("LegalForm field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: LegalFormType = {
    id: "123-456",
    schoolId: "234-567",
    name: "facy legal form",
    checkboxText: "check here",
    emailToChild: false,
    file: "/documents/fancy-legal-form.docx",
    requireStudentSignOff: true,
    state: 234,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("checkboxText", () => {
    const result = F.getCheckboxText(parent);
    sinon.assert.match(result, parent.checkboxText);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("emailToChild", () => {
    const result = F.getEmailToChild(parent);
    sinon.assert.match(result, parent.emailToChild);
  });
  it("file", () => {
    const result = F.getFile(parent);
    sinon.assert.match(result, parent.file);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("requireStudentSignOff", () => {
    const result = F.getRequireStudentSignOff(parent);
    sinon.assert.match(result, parent.requireStudentSignOff);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
