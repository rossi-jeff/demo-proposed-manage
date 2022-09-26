import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Group query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("groups", () => {
    const stub = sandbox.stub(Q, "getGroups");
    it("should call getGroups once", async () => {
      //@ts-expect-error stubbing
      await Q.groups({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("group", () => {
    const stub = sandbox.stub(Q, "getGroup");
    const id = "123-456";
    const args = { id };
    it("should call getGroup with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.group({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
