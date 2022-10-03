import * as F from "./field-resolvers";
import { InvoiceTransactionType } from "./types";
import sinon from "sinon";

describe("InvoiceTransaction field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: InvoiceTransactionType = {
    id: "123-456",
    remoteId: "foo-bar",
    status: "pending",
    invoiceId: "234-567",
    paymentType: "CC",
    adminFlag: false,
    problemStatusAt: now,
    details: "biz baz buz",
    createdAt: now,
    updatedAt: now,
  };
  it("adminFlag", () => {
    const result = F.getAdminFlag(parent);
    sinon.assert.match(result, parent.adminFlag);
  });
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("details", () => {
    const result = F.getDetails(parent);
    sinon.assert.match(result, parent.details);
  });
  it("invoiceId", () => {
    const result = F.getInvoiceId(parent);
    sinon.assert.match(result, parent.invoiceId);
  });
  it("paymentType", () => {
    const result = F.getPaymentType(parent);
    sinon.assert.match(result, parent.paymentType);
  });
  it("problemStatusAt", () => {
    const result = F.getProblemStatusAt(parent);
    sinon.assert.match(result, parent.problemStatusAt?.toString());
  });
  it("remoteId", () => {
    const result = F.getRemoteId(parent);
    sinon.assert.match(result, parent.remoteId);
  });
  it("status", () => {
    const result = F.getStatus(parent);
    sinon.assert.match(result, parent.status);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
