import * as F from "./field-resolvers";
import { VentureRegistrationType } from "./types";
import sinon from "sinon";

describe("VentureRegistration field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: VentureRegistrationType = {
    id: "123",
    registrationId: "234",
    ventureId: "345",
    state: 123,
    comment: "foo bar biz baz",
    paymentCodeId: "456",
    createdAt: now,
    updatedAt: now,
  };
  it("comment", () => {
    const result = F.getComment(parent);
    sinon.assert.match(result, parent.comment);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("paymentCodeId", () => {
    const result = F.getPaymentCodeId(parent);
    sinon.assert.match(result, parent.paymentCodeId);
  });
  it("registrationId", () => {
    const result = F.getRegistrationId(parent);
    sinon.assert.match(result, parent.registrationId);
  });
  it("state", () => {
    const result = F.getState(parent);
    sinon.assert.match(result, parent.state);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
  it("ventureId", () => {
    const result = F.getVentureId(parent);
    sinon.assert.match(result, parent.ventureId);
  });
});
