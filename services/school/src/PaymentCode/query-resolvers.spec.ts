import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("PaymentCode query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("paymentCodes", () => {
    const stub = sandbox.stub(Q, "getPaymentCodes");
    it("should call getPaymentCodes once", async () => {
      //@ts-expect-error stubbing
      await Q.paymentCodes({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("paymentCode", () => {
    const stub = sandbox.stub(Q, "getPaymentCode");
    const id = "asdf-ghjk";
    const args = { id };
    it("should call getPaymentCode with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.paymentCode({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
