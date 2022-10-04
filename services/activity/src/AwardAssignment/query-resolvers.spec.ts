import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("AwardAssignment query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("awardAssignments", () => {
    const stub = sandbox.stub(Q, "getAwardAssignments");
    it("should call getAwardAssignments once", async () => {
      //@ts-expect-error stubbing
      await Q.awardAssignments({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("awardAssignment", () => {
    const stub = sandbox.stub(Q, "getAwardAssignment");
    const id = "234-567";
    const args = { id };
    it("should call getAwardAssignment with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.awardAssignment({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
