import * as F from "./field-resolvers";
import { ParticipantInformationConfigurationType } from "./types";
import sinon from "sinon";

describe("ParticipantInformationConfiguration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: ParticipantInformationConfigurationType = {
    id: "123",
    schoolId: "456",
    activityId: "789",
    key: "foo",
    visible: true,
    required: false,
    activityKind: "Football",
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("activityKind", () => {
    const result = F.getActivityKind(parent);
    sinon.assert.match(result, parent.activityKind);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("key", () => {
    const result = F.getKey(parent);
    sinon.assert.match(result, parent.key);
  });
  it("required", () => {
    const result = F.getRequired(parent);
    sinon.assert.match(result, parent.required);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("visible", () => {
    const result = F.getVisible(parent);
    sinon.assert.match(result, parent.visible);
  });
});
