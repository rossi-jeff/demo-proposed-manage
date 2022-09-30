import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("GroupRegistration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("groupRegistrations", () => {
    const stub = sandbox.stub(Q, "getGroupRegistrations");
    it("should call getGroupRegistrations once", async () => {
      //@ts-expect-error stubbing
      await Q.groupRegistrations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("groupRegistration", () => {
    const stub = sandbox.stub(Q, "getGroupRegistration");
    const id = "abc";
    const args = { id };
    it("should call getGroupRegistration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.groupRegistration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
