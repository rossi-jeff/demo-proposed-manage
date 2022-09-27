import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Color query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("colors", () => {
    const stub = sandbox.stub(Q, "getColors");
    it("should call getColors once", async () => {
      //@ts-expect-error stubbing
      await Q.colors({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("color", () => {
    const stub = sandbox.stub(Q, "getColor");
    const id = "234";
    const args = { id };
    it("should call getColor with the proper args", async () => {
      //@ts-expect-error stubbing
      await Q.color({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
