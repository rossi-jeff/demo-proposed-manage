import * as F from "./field-resolvers";
import { CampShortOrderType } from "./types";
import sinon from "sinon";

describe("CampShortOrder field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: CampShortOrderType = {
    id: "123",
    campTShirtOrderId: "456",
    designLayout: "foo",
    designChoice: "bar",
    topLineText: "biz baz",
    bottomLineText: "foo bar",
    shortSizes: "S",
    participants: "the team",
    createdAt: now,
    updatedAt: now,
  };
  it("bottomLineText", () => {
    const result = F.getBottomLineText(parent);
    sinon.assert.match(result, parent.bottomLineText);
  });
  it("campTShirtOrderId", () => {
    const result = F.getCampTShirtOrderId(parent);
    sinon.assert.match(result, parent.campTShirtOrderId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("designChoice", () => {
    const result = F.getDesignChoice(parent);
    sinon.assert.match(result, parent.designChoice);
  });
  it("designLayout", () => {
    const result = F.getDesignLayout(parent);
    sinon.assert.match(result, parent.designLayout);
  });
  it("participants", () => {
    const result = F.getParticipants(parent);
    sinon.assert.match(result, parent.participants);
  });
  it("shortSizes", () => {
    const result = F.getShortSizes(parent);
    sinon.assert.match(result, parent.shortSizes);
  });
  it("topLineText", () => {
    const result = F.getTopLineText(parent);
    sinon.assert.match(result, parent.topLineText);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
