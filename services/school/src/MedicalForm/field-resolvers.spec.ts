import * as F from "./field-resolvers";
import { MedicalFormType } from "./types";
import sinon from "sinon";

describe("MedicalForm field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: MedicalFormType = {
    id: "123-456",
    schoolId: "234-567",
    name: "Foo Bar",
    file: "/biz/baz/buz/foo.doc",
    freshmanOnly: false,
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("file", () => {
    const result = F.getFile(parent);
    sinon.assert.match(result, parent.file);
  });
  it("freshmanOnly", () => {
    const result = F.getFreshmanOnly(parent);
    sinon.assert.match(result, parent.freshmanOnly);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
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
