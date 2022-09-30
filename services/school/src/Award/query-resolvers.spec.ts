import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Award query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("awards", () => {
    const stub = sandbox.stub(Q, "getAwards");
    it("should call getAwards once", async () => {
      //@ts-expect-error stubbing
      await Q.awards({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("award", () => {
    const stub = sandbox.stub(Q, "getAward");
    const id = "123-456";
    const args = { id };
    it("should call getAward with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.award({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
