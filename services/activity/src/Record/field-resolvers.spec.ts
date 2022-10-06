import * as F from "./field-resolvers";
import { RecordType } from "./types";
import sinon from "sinon";

describe("Record field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RecordType = {
    id: "123",
    groupId: "456",
    sportCode: "foo",
    title: "biz baz buz",
    recordCode: "bar",
    unit: "meter",
    kind: "max",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("recordCode", () => {
    const result = F.getRecordCode(parent);
    sinon.assert.match(result, parent.recordCode);
  });
  it("sportCode", () => {
    const result = F.getSportCode(parent);
    sinon.assert.match(result, parent.sportCode);
  });
  it("title", () => {
    const result = F.getTitle(parent);
    sinon.assert.match(result, parent.title);
  });
  it("unit", () => {
    const result = F.getUnit(parent);
    sinon.assert.match(result, parent.unit);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
