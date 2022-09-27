import * as Q from "./query-resolvers";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("AlergicCondition query resolvers", () => {
  afterEach(() => {
    sandbox.reset();
  });
  describe("alergicConditions", () => {
    const stub = sandbox.stub(Q, "getAlergicConditions");
    it("should call getAlergicConditions once", async () => {
      //@ts-expect-error stubbing
      await Q.alergicConditions({}, {}, {});
      sandbox.assert.calledOnce(stub);
    });
  });
  describe("alergicCondition", () => {
    const stub = sandbox.stub(Q, "getAlergicCondition");
    const id = "987-654";
    const args = { id };
    it("should call getAlergicCondition with proper args", async () => {
      //@ts-expect-error stubbing
      await Q.alergicCondition({}, args, {});
      sandbox.assert.calledWith(stub, args);
    });
  });
});
