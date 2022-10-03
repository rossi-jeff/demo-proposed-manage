import * as F from "./field-resolvers";
import { LineItemType } from "./types";
import sinon from "sinon";

describe("LineItem field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: LineItemType = {
    id: "123",
    registrationId: "234",
    ventureId: "345",
    activityName: "fun stuff",
    ventureName: "exciting ad",
    price: 123,
    invoiceId: "456",
    refunded: false,
    paid: true,
    refundAmount: 234,
    ticketKind: "first class",
    eventName: "biz baz buz",
    ticketId: "567",
    state: 345,
    createdAt: now,
    updatedAt: now,
  };
  it("activityName", () => {
    const result = F.getActivityName(parent);
    sinon.assert.match(result, parent.activityName);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("eventName", () => {
    const result = F.getEventName(parent);
    sinon.assert.match(result, parent.eventName);
  });
  it("invoiceId", () => {
    const result = F.getInvoiceId(parent);
    sinon.assert.match(result, parent.invoiceId);
  });
  it("paid", () => {
    const result = F.getPaid(parent);
    sinon.assert.match(result, parent.paid);
  });
  it("price", () => {
    const result = F.getPrice(parent);
    sinon.assert.match(result, parent.price);
  });
  it("refundAmount", () => {
    const result = F.getRefundAmount(parent);
    sinon.assert.match(result, parent.refundAmount);
  });
  it("refunded", () => {
    const result = F.getRefunded(parent);
    sinon.assert.match(result, parent.refunded);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("ticketId", () => {
    const result = F.getTicketId(parent);
    sinon.assert.match(result, parent.ticketId);
  });
  it("ticketKind", () => {
    const result = F.getTicketKind(parent);
    sinon.assert.match(result, parent.ticketKind);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("ventureId", () => {
    const result = F.getVentureId(parent);
    sinon.assert.match(result, parent.ventureId);
  });
  it("ventureName", () => {
    const result = F.getVentureName(parent);
    sinon.assert.match(result, parent.ventureName);
  });
});
