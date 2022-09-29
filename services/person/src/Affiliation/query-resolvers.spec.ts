import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Affiliation query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("affiliations", () => {
    const stub = sandbox.stub(Q, "getAffiliations");
    it("should call getAffiliations once", async () => {
      //@ts-expect-error stubbing
      await Q.affiliations({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("affiliation", () => {
    const stub = sandbox.stub(Q, "getAffiliation");
    const id = "234-567";
    const args = { id };
    it("should call getAffiliation with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.affiliation({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
