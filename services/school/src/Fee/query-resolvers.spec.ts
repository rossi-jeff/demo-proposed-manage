import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Fee query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("fees", () => {
    const stub = sandbox.stub(Q, "getFees");
    it("should call getFees once", async () => {
      //@ts-expect-error stubbing
      await Q.fees({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("fee", () => {
    const stub = sandbox.stub(Q, "getFee");
    const id = "234";
    const args = { id };
    it("should call getFee with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.fee({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
