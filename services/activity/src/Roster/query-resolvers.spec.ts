import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Roster query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("rosters", () => {
    const stub = sandbox.stub(Q, "getRosters");
    it("should call getRosters once", async () => {
      //@ts-expect-error stubbing
      await Q.rosters({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("roster", () => {
    const stub = sandbox.stub(Q, "getRoster");
    const id = "abc-def";
    const args = { id };
    it("should call getRoster with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.roster({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
