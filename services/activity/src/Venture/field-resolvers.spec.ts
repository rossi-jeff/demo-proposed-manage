import * as F from "./field-resolvers";
import sinon from "sinon";
import { VentureType } from "./types";

describe("Venture field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: VentureType = {
    id: "123-456",
    activityId: "234-567",
    name: "venture 1234",
    description: "foo bar biz baz",
    type: "exciting ad venture",
    gender: "male",
    grade: "B+",
    basePrice: 123,
    nonDistrictBasePrice: 234,
    registrationStart: now,
    registrationEnd: now,
    director: "Jane Doe",
    directorBio: "blah blah blah",
    registerable: false,
    maxNumberOfParticipants: 345,
    location: null,
    cancelled: true,
    state: 456,
    season: "Winter",
    sourceVentureId: 567,
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
  });
  it("basePrice", () => {
    const result = F.getBasePrice(parent);
    sinon.assert.match(result, parent.basePrice);
  });
  it("cancelled", () => {
    const result = F.getCancelled(parent);
    sinon.assert.match(result, parent.cancelled);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("description", () => {
    const result = F.getDescription(parent);
    sinon.assert.match(result, parent.description);
  });
  it("director", () => {
    const result = F.getDirector(parent);
    sinon.assert.match(result, parent.director);
  });
  it("directorBio", () => {
    const result = F.getDirectorBio(parent);
    sinon.assert.match(result, parent.directorBio);
  });
  it("gender", () => {
    const result = F.getGender(parent);
    sinon.assert.match(result, parent.gender);
  });
  it("grade", () => {
    const result = F.getGrade(parent);
    sinon.assert.match(result, parent.grade);
  });
  it("location", () => {
    const result = F.getLocation(parent);
    sinon.assert.match(result, parent.location);
  });
  it("maxNumberOfParticipants", () => {
    const result = F.getMaxNumberOfParticipants(parent);
    sinon.assert.match(result, parent.maxNumberOfParticipants);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
  });
  it("nonDistrictBasePrice", () => {
    const result = F.getNonDistrictBasePrice(parent);
    sinon.assert.match(result, parent.nonDistrictBasePrice);
  });
  it("registerable", () => {
    const result = F.getRegisterable(parent);
    sinon.assert.match(result, parent.registerable);
  });
  it("registrationEnd", () => {
    const result = F.getRegistrationEnd(parent);
    sinon.assert.match(result, parent.registrationEnd?.toString());
  });
  it("registrationStart", () => {
    const result = F.getRegistrationStart(parent);
    sinon.assert.match(result, parent.registrationStart?.toString());
  });
  it("season", () => {
    const result = F.getSeason(parent);
    sinon.assert.match(result, parent.season);
  });
  it("sourceVentureId", () => {
    const result = F.getSourceVentureId(parent);
    sinon.assert.match(result, parent.sourceVentureId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("type", () => {
    const result = F.getType(parent);
    sinon.assert.match(result, parent.type);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
