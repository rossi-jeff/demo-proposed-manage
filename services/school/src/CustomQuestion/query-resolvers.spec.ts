import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("CustomQuestion query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("customQuestions", () => {
    const stub = sandbox.stub(Q, "getCustomQuestions");
    it("should call getCustomQuestions once", async () => {
      //@ts-expect-error stubbing
      await Q.customQuestions({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("customQuestion", () => {
    const stub = sandbox.stub(Q, "getCustomQuestion");
    const id = "987-654";
    const args = { id };
    it("should call getCustomQuestion with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.customQuestion({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
