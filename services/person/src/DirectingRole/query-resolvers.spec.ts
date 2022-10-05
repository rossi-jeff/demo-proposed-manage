import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("DirectingRole query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("directingRoles", () => {
    const stub = sandbox.stub(Q, "getDirectingRoles");
    it("should call getDirectingRoles once", async () => {
      //@ts-expect-error stubbing
      await Q.directingRoles({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("directingRole", () => {
    const stub = sandbox.stub(Q, "getDirectingRole");
    const id = "567";
    const args = { id };
    it("should call getDirectingRole with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.directingRole({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
