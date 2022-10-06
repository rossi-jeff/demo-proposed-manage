import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Record query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("records", () => {
    const stub = sandbox.stub(Q, "getRecords");
    it("should call getRecords once", async () => {
      //@ts-expect-error stubbing
      await Q.records({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("record", () => {
    const stub = sandbox.stub(Q, "getRecord");
    const id = "asdf-ghjk";
    const args = { id };
    it("should call getRecord with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.record({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
