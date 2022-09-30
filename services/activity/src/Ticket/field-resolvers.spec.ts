import * as F from "./field-resolvers";
import { TicketType } from "./types";
import sinon from "sinon";

describe("Ticket field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: TicketType = {
    id: "123-456",
    eventId: "234-567",
    kind: "not often enough",
    basePrice: 123,
    maxNumberOfTickets: 234,
    state: 345,
    title: "Super Event",
    groupSize: 456,
    commentsEnabled: true,
    createdAt: now,
    updatedAt: now,
  };
  it("basePrice", () => {
    const result = F.getBasePrice(parent);
    sinon.assert.match(result, parent.basePrice);
  });
  it("commentsEnabled", () => {
    const result = F.getCommentsEnabled(parent);
    sinon.assert.match(result, parent.commentsEnabled);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("eventId", () => {
    const result = F.getEventId(parent);
    sinon.assert.match(result, parent.eventId);
  });
  it("groupSize", () => {
    const result = F.getGroupSize(parent);
    sinon.assert.match(result, parent.groupSize);
  });
  it("kind", () => {
    const result = F.getKind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("maxNumberOfTickets", () => {
    const result = F.getMaxNumberOfTickets(parent);
    sinon.assert.match(result, parent.maxNumberOfTickets);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("title", () => {
    const result = F.getTitle(parent);
    sinon.assert.match(result, parent.title);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
