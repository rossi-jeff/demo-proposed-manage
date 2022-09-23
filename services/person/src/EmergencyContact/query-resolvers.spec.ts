import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("EmergencyContact query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("emergencyContacts", () => {
    const stub = sandbox.stub(Q, "getEmergencyContacts");
    it("should call getEmergencyContacts once", async () => {
      //@ts-expect-error stubbing
      await Q.emergencyContacts({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("emergencyContact", () => {
    const stub = sandbox.stub(Q, "getEmergencyContact");
    const id = "123-456";
    const args = { id };
    it("should call getEmergencyContact with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.emergencyContact({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
