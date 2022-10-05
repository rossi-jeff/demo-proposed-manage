import * as F from "./field-resolvers";
import { CustomQuestionType } from "./types";
import sinon from "sinon";

describe("CustomQuestion field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CustomQuestionType = {
    id: "123",
    schoolId: "456",
    state: "Florida",
    question: "Why",
    questionType: "Philosophical",
    questionOptions: "why not, just because",
    active: true,
    required: false,
    dependentOn: 123,
    dependentAnswer: "foo bar",
    sortOrder: 234,
    activityType: "biz baz buz",
    createdAt: now,
    updatedAt: now,
  };
  it("active", () => {
    const result = F.getActive(parent);
    sinon.assert.match(result, parent.active);
  });
  it("activityType", () => {
    const result = F.getActivityType(parent);
    sinon.assert.match(result, parent.activityType);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("dependentAnswer", () => {
    const result = F.getDependentAnswer(parent);
    sinon.assert.match(result, parent.dependentAnswer);
  });
  it("dependentOn", () => {
    const result = F.getDependentOn(parent);
    sinon.assert.match(result, parent.dependentOn);
  });
  it("question", () => {
    const result = F.getQuestion(parent);
    sinon.assert.match(result, parent.question);
  });
  it("questionOptions", () => {
    const result = F.getQuestionOptions(parent);
    sinon.assert.match(result, parent.questionOptions);
  });
  it("questionType", () => {
    const result = F.getQuestionType(parent);
    sinon.assert.match(result, parent.questionType);
  });
  it("required", () => {
    const result = F.getRequired(parent);
    sinon.assert.match(result, parent.required);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
  });
  it("sortOrder", () => {
    const result = F.getSortOrder(parent);
    sinon.assert.match(result, parent.sortOrder);
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
