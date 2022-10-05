import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("GroupAwardAssignment query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("groupAwardAssignments", () => {
    const stub = sandbox.stub(Q, "getGroupAwardAssignments");
    it("should call getGroupAwardAssignments once", async () => {
      //@ts-expect-error stubbing
      await Q.groupAwardAssignments({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("groupAwardAssignment", () => {
    const stub = sandbox.stub(Q, "getGroupAwardAssignment");
    const id = "234-567";
    const args = { id };
    it("should call getGroupAwardAssignment with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.groupAwardAssignment({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
