import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("FuelMyClubActivity query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("fuelMyClubActivities", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubActivities");
    it("should call getFuelMyClubActivities once", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubActivities({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("fuelMyClubActivity", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubActivity");
    const id = "zxcv-bnm";
    const args = { id };
    it("should call getFuelMyClubActivity with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubActivity({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
