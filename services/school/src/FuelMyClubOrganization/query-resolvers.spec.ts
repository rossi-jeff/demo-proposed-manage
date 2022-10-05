import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("FuelMyClubOrganization query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("fuelMyClubOrganizations", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubOrganizations");
    it("should call getFuelMyClubOrganizations once", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubOrganizations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("fuelMyClubOrganization", () => {
    const stub = sandbox.stub(Q, "getFuelMyClubOrganization");
    const id = "lkjh-gfds";
    const args = { id };
    it("should call getFuelMyClubOrganization with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.fuelMyClubOrganization({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
