import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("RecordAssignment query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("recordAssignments", () => {
    const stub = sandbox.stub(Q, "getRecordAssignments");
    it("should call getRecordAssignments once", async () => {
      //@ts-expect-error stubbing
      await Q.recordAssignments({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("recordAssignment", () => {
    const stub = sandbox.stub(Q, "getRecordAssignment");
    const id = "123-456";
    const args = { id };
    it("should call getRecordAssignment with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.recordAssignment({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
