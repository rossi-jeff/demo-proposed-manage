import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Settlement query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("settlements", () => {
    const stub = sandbox.stub(Q, "getSettlements");
    it("should call getSettlements once", async () => {
      //@ts-expect-error stubbing
      await Q.settlements({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("settlement", () => {
    const stub = sandbox.stub(Q, "getSettlement");
    const id = "234-567";
    const args = { id };
    it("should call getSettlement with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.settlement({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
