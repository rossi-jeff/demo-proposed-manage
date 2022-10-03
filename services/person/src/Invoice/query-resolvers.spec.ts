import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Invoice query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("invoices", () => {
    const stub = sandbox.stub(Q, "getInvoices");
    it("should call getInvoices once", async () => {
      //@ts-expect-error stubbing
      await Q.invoices({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("invoice", () => {
    const stub = sandbox.stub(Q, "getInvoice");
    const id = "123-456";
    const args = { id };
    it("should call getInvoice with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.invoice({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
