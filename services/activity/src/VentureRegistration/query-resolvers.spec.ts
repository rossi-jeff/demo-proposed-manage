import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("VentureRegistration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("ventureRegistrations", () => {
    const stub = sandbox.stub(Q, "getVentureRegistrations");
    it("should call getVentureRegistrations once", async () => {
      //@ts-expect-error stubbing
      await Q.ventureRegistrations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("ventureRegistration", () => {
    const stub = sandbox.stub(Q, "getVentureRegistration");
    const id = "12345";
    const args = { id };
    it("should call getVentureRegistration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.ventureRegistration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
