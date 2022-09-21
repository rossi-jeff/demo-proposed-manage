import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("Activity query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("activities", () => {
    const stub = sandbox.stub(Q, "getActivities");
    it("should call getActivities once", async () => {
      //@ts-expect-error stubbing
      await Q.activities({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("activity", () => {
    const id = "123-456";
    const args = { id };
    const stub = sandbox.stub(Q, "getActivity");
    it("should call getActivity with propeer args", async () => {
      //@ts-expect-error stubbing
      await Q.activity({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
