import * as F from "./field-resolvers";
import { CustomAnswerType } from "./types";
import sinon from "sinon";

describe("CustomAnswer field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CustomAnswerType = {
    id: "123",
    personId: "456",
    questionId: "789",
    answer: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("answer", () => {
    const result = F.getAnswer(parent);
    sinon.assert.match(result, parent.answer);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("questionId", () => {
    const result = F.getQuestionId(parent);
    sinon.assert.match(result, parent.questionId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
