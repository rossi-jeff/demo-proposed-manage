import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("LineItem query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("lineItems", () => {
    const stub = sandbox.stub(Q, "getLineItems");
    it("should calll getLineItems once", async () => {
      //@ts-expect-error stubbing
      await Q.lineItems({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("lineItem", () => {
    const stub = sandbox.stub(Q, "getLineItem");
    const id = "qwerty";
    const args = { id };
    it("should call getLineItem with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.lineItem({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
