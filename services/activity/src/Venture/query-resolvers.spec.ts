import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Venture query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("ventures", () => {
    const stub = sandbox.stub(Q, "getVentures");
    it("should call getVentures once", async () => {
      //@ts-expect-error stubbing
      await Q.ventures({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("venture", () => {
    const stub = sandbox.stub(Q, "getVenture");
    const id = "234-567";
    const args = { id };
    it("should call getVenture with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.venture({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
