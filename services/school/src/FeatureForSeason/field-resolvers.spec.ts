import * as F from "./field-resolvers";
import { FeatureForSeasonType } from "./types";
import sinon from "sinon";

describe("FeatureForSeason field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: FeatureForSeasonType = {
    id: "123",
    schoolId: "456",
    season: "Fall",
    feature: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("feature", () => {
    const result = F.getFeature(parent);
    sinon.assert.match(result, parent.feature);
  });
  it("schoolId", () => {
    const result = F.getSchoolId(parent);
    sinon.assert.match(result, parent.schoolId);
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
