import * as F from "./field-resolvers";
import { TicketRegistrationType } from "./types";
import sinon from "sinon";

describe("TicketRegistration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: TicketRegistrationType = {
    id: "123",
    registrationId: "456",
    ticketId: "789",
    state: 123,
    ticketholderFirstName: "John",
    ticketEmail: "jpublic@example.com",
    studentId: "234",
    lineItemId: "345",
    confirmationNumber: "12345",
    ticketholderLastName: "Public",
    comment: "foo bar biz baz",
    createdAt: now,
    updatedAt: now,
  };
  it("comment", () => {
    const result = F.getComment(parent);
    sinon.assert.match(result, parent.comment);
  });
  it("confirmationNumber", () => {
    const result = F.getConfirmationNumber(parent);
    sinon.assert.match(result, parent.confirmationNumber);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("lineItemId", () => {
    const result = F.getLineItemId(parent);
    sinon.assert.match(result, parent.lineItemId);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("studentId", () => {
    const result = F.getStudentId(parent);
    sinon.assert.match(result, parent.studentId);
  });
  it("ticketEmail", () => {
    const result = F.getTicketEmail(parent);
    sinon.assert.match(result, parent.ticketEmail);
  });
  it("ticketId", () => {
    const result = F.getTicketId(parent);
    sinon.assert.match(result, parent.ticketId);
  });
  it("ticketholderFirstName", () => {
    const result = F.getTicketholderFirstName(parent);
    sinon.assert.match(result, parent.ticketholderFirstName);
  });
  it("ticketholderLastName", () => {
    const result = F.getTicketholderLastName(parent);
    sinon.assert.match(result, parent.ticketholderLastName);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
