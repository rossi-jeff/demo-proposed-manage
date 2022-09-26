import * as F from "./field-resolvers";
import sinon from "sinon";
import { GroupType } from "./types";

describe("Group field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const parent: GroupType = {
    id: "123-456",
    activityId: "987-654",
    name: "Groupy McGroupFace",
    level: "Varsity",
    gender: "Mens",
    a2kSiteschoolsportId: 123,
    sportName: "Ping Pong",
    rosterwebserviceAccess: false,
    state: 345,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  it("a2kSiteschoolsportId", () => {
    const result = F.getA2kSiteschoolsportId(parent);
    sinon.assert.match(result, parent.a2kSiteschoolsportId);
  });
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("gender", () => {
    const result = F.getGender(parent);
    sinon.assert.match(result, parent.gender);
  });
  it("level", () => {
    const result = F.getLevel(parent);
    sinon.assert.match(result, parent.level);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("rosterwebserviceAccess", () => {
    const result = F.getRosterwebserviceAccess(parent);
    sinon.assert.match(result, parent.rosterwebserviceAccess);
  });
  it("sportName", () => {
    const result = F.getSportName(parent);
    sinon.assert.match(result, parent.sportName);
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
