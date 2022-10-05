import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("FuelMyClubRegistration query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("fuelMyClubRegistrations", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubRegistrations");
    it("should call getFuelMyClubRegistrations once", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubRegistrations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("fuelMyClubRegistration", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubRegistration");
    const id = "345-678";
    const args = { id };
    it("should call getFuelMyClubRegistration with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubRegistration({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
