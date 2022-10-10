import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Message query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("messages", () => {
    const stub = sandbox.stub(Q, "getMessages");
    it("should call getMessages once", async () => {
      //@ts-expect-error stubbing
      await Q.messages({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("message", () => {
    const stub = sandbox.stub(Q, "getMessage");
    const id = "123-456";
    const args = { id };
    it("should call getMessage with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.message({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
