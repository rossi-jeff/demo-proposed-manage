import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("GroupAward query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("groupAwards", () => {
    const stub = sandbox.stub(Q, "getGroupAwards");
    it("should call getGroupAwards once", async () => {
      //@ts-expect-error stubbing
      await Q.groupAwards({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("groupAward", () => {
    const stub = sandbox.stub(Q, "getGroupAward");
    const id = "asdf";
    const args = { id };
    it("should call getGroupAward with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.groupAward({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
