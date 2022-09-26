import * as F from "./field-resolvers";
import sinon from "sinon";
import { EventType } from "./types";

describe("Event field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: EventType = {
    id: "123-456",
    activityId: "234-567",
    name: "Special Event",
    description: "foo bar biz baz buz",
    registerable: true,
    director: "John Q Public",
    startTime: now,
    endTime: now,
    studentOnly: false,
    location: "123 Made Up St",
    registrationStart: now,
    registrationEnd: now,
    cancelled: false,
    state: 123,
    eventDate: now,
    maxTicketCapacity: null,
    createdAt: now,
    updatedAt: now,
  };
  it("activityId", () => {
    const result = F.getActivityId(parent);
    sinon.assert.match(result, parent.activityId);
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
  it("endTime", () => {
    const result = F.getEndTime(parent);
    sinon.assert.match(result, parent.endTime?.toString());
  });
  it("eventDate", () => {
    const result = F.getEventDate(parent);
    sinon.assert.match(result, parent.eventDate?.toString());
  });
  it("location", () => {
    const result = F.getLocation(parent);
    sinon.assert.match(result, parent.location);
  });
  it("maxTicketCapacity", () => {
    const result = F.getMaxTicketCapacity(parent);
    sinon.assert.match(result, parent.maxTicketCapacity);
  });
  it("name", () => {
    const result = F.getName(parent);
    sinon.assert.match(result, parent.name);
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
  it("startTime", () => {
    const result = F.getStartTime(parent);
    sinon.assert.match(result, parent.startTime?.toString());
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("studentOnly", () => {
    const result = F.getStudentOnly(parent);
    sinon.assert.match(result, parent.studentOnly);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
