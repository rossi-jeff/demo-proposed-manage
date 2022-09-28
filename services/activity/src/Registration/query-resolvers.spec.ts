import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Registration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("registrations", () => {
    const stub = sandbox.stub(Q, "getRegistrations");
    it("should call getRegistrations once", async () => {
      //@ts-expect-error stubbing
      await Q.registrations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("registration", () => {
    const stub = sandbox.stub(Q, "getRegistration");
    const id = "987-654";
    const args = { id };
    it("should call getRegistration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.registration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
