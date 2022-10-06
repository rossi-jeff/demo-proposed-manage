import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("FuelMyClubFundraiser query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("fuelMyClubFundraisers", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubFundraisers");
    it("should call getFuelMyClubFundraisers once", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubFundraisers({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("fuelMyClubFundraiser", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubFundraiser");
    const id = "123-456";
    const args = { id };
    it("should call getFuelMyClubFundraiser with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubFundraiser({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
