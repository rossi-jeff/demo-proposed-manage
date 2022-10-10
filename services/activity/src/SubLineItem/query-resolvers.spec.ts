import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("SubLineItem query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("subLineItems", () => {
    const stub = sandbox.stub(Q, "getSubLineItems");
    it("should call getSubLineItems once", async () => {
      //@ts-expect-error stubbing
      await Q.subLineItems({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("subLineItem", () => {
    const stub = sandbox.stub(Q, "getSubLineItem");
    const id = "abc";
    const args = { id };
    it("should call getSubLineItem with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.subLineItem({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
