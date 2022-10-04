import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("CustomDiscount query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("customDiscounts", () => {
    const stub = sandbox.stub(Q, "getCustomDiscounts");
    it("should call getCustomDiscounts once", async () => {
      //@ts-expect-error stubbing
      await Q.customDiscounts({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("customDiscount", () => {
    const stub = sandbox.stub(Q, "getCustomDiscount");
    const id = "123";
    const args = { id };
    it("should call getCustomDiscount with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.customDiscount({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
