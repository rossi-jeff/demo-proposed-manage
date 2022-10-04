import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("CampTshirtOrder query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("campTshirtOrders", () => {
    const stub = sandbox.stub(Q, "getCampTshirtOrders");
    it("should call getCampTshirtOrders once", async () => {
      //@ts-expect-error stubbing
      await Q.campTshirtOrders({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("campTshirtOrder", () => {
    const stub = sandbox.stub(Q, "getCampTshirtOrder");
    const id = "123";
    const args = { id };
    it("should call getCampTshirtOrder with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.campTshirtOrder({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
