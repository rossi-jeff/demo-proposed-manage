import * as F from "./field-resolvers";
import sinon from "sinon";
import { RosterType } from "./types";

describe("Roster field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: RosterType = {
    id: "123-456",
    groupId: "234-567",
    season: "Fall",
    final: false,
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("final", () => {
    const result = F.getFinal(parent);
    sinon.assert.match(result, parent.final);
  });
  it("groupId", () => {
    const result = F.getGroupId(parent);
    sinon.assert.match(result, parent.groupId);
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
