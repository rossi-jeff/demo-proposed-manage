import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("LegalVideo query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("legalVideos", () => {
    const stub = sandbox.stub(Q, "getLegalVideos");
    it("should call getLegalVideos once", async () => {
      //@ts-expect-error stubbing
      await Q.legalVideos({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("legalVideo", () => {
    const stub = sandbox.stub(Q, "getLegalVideo");
    const id = "123-456-789";
    const args = { id };
    it("should call getLegalVideo with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.legalVideo({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
