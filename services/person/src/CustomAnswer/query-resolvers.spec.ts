import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("CustomAnswer query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("customAnswers", () => {
    const stub = sandbox.stub(Q, "getCustomAnswers");
    it("should call getCustomAnswers once", async () => {
      //@ts-expect-error stubbing
      await Q.customAnswers({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("customAnswer", () => {
    const stub = sandbox.stub(Q, "getCustomAnswer");
    const id = "asdf-ghjk";
    const args = { id };
    it("should call getCustomAnswer with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.customAnswer({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
