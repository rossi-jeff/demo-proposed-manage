import * as F from "./field-resolvers";
import { InvoiceType } from "./types";
import sinon from "sinon";

describe("Invoice field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  const now = new Date();
  const parent: InvoiceType = {
    id: "123-456",
    personId: "234-567",
    credit: 123,
    invoiceTransactionId: "345-678",
    createdAt: now,
    updatedAt: now,
  };
  it("createdAt", () => {
    const result = F.getCreatedAt(parent);
    sinon.assert.match(result, parent.createdAt.toString());
  });
  it("credit", () => {
    const result = F.getCredit(parent);
    sinon.assert.match(result, parent.credit);
  });
  it("invoiceTransactionId", () => {
    const result = F.getInvoiceTransactionId(parent);
    sinon.assert.match(result, parent.invoiceTransactionId);
  });
  it("personId", () => {
    const result = F.getPersonId(parent);
    sinon.assert.match(result, parent.personId);
  });
  it("updatedAt", () => {
    const result = F.getUpdatedAt(parent);
    sinon.assert.match(result, parent.updatedAt.toString());
  });
});
