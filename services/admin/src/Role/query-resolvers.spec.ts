import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Role query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("roles", () => {
    const stub = sandbox.stub(Q, "getRoles");
    it("should call getRoles once", async () => {
      //@ts-expect-error stubbing
      await Q.roles({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("role", () => {
    const stub = sandbox.stub(Q, "getRole");
    const id = "bcd-efg";
    const args = { id };
    it("should call getRole with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.role({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
