import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Address query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("addresses", () => {
    const stub = sandbox.stub(Q, "getAddressses");
    it("should call getAddresses once", async () => {
      //@ts-expect-error stubbing
      await Q.addresses({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("address", () => {
    const stub = sandbox.stub(Q, "getAddress");
    const id = "123-456";
    const args = { id };
    it("should call getAddress with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.address({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
