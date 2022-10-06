import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("FeatureForSeason query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("featureForSeasons", () => {
    const stub = sandbox.stub(Q, "getFeatureForSeasons");
    it("should call getFeatureForSeasons once", async () => {
      //@ts-expect-error stubbing
      await Q.featureForSeasons({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("featureForSeason", () => {
    const stub = sandbox.stub(Q, "getFeatureForSeason");
    const id = "qwer-tyui";
    const args = { id };
    it("should call getFeatureForSeason with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.featureForSeason({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
